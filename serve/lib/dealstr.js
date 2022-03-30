const _GET_CURRENT_DATA = "_GET_CURRENT_DATA";

function obj2string(obj) {
  if (typeof obj === "string") {
    return obj;
  }
  return JSON.stringify(obj);
}
function getCompName(config, dog) {
  return config.component + config.id + dog;
}

function getDataName(config) {
  return getCompName(config, "Data");
}

// 主要在模板的props上添加字符
function transData(data) {
  return typeof data === "string" ? "'" + data + "'" : data;
}
function getProps(config) {
  const arr = [];
  const { staticProps, data } = config;
  for (let i in staticProps) {
    const propsval = staticProps[i];
    // 没有值的话，就直接放弃了,数据只能从data里面来
    if (data && data.hasOwnProperty(propsval)) {
      arr.push(`:${i}="${getDataName(config) + "." + propsval}"`);
    }
    /*  arr.push(
      `:${i}="${
        data && data.hasOwnProperty(propsval)
          ? getDataName(config) + '.' + propsval
          : transData(propsval)
      }"`
    ) */
  }
  return " " + arr.join(" ");
}

function setfuncName(funcstr, id) {
  const idx = funcstr.indexOf("(");
  if (idx > -1) {
    funcstr = funcstr.substring(0, idx) + id + funcstr.substring(idx);
  }
  return funcstr;
}
// 变换了method的方法
function getEvents(config) {
  const arr = [];
  // for (let i of config.methods) {
  (config.methods || []).forEach((methval, i) => {
    /* const isstr = typeof methval === 'string'
    config.methods[i] = isstr
      ? methval
      : // 变换名字
        config.component + config.id + config.methods[i].toString() */
    // console.log('methval', methval)
    let func = null;
    if (typeof methval === "string") {
      func = new Function(methval);
    } else {
      func = new Function(...(methval.params || []), methval.body);
    }
    config.methods[i] =
      config.component +
      config.id +
      methval.name +
      func.toString().slice("function anonymous".length);

    arr.push(`@${methval.name}="${getCompName(config, methval.name)}"`);
  });
  return " " + arr.join(" ");
}

function isCenter(str) {
  return str === "center";
}

function getStyle({ position }) {
  let outerStyle = "position:absolute;";
  let innerStyle = "width:";
  if (position.outerWidth) {
    innerStyle += position.outerWidth;
  } else {
    innerStyle += "auto";
  }
  let outerClassName = [];
  if (isCenter(position.dirx)) {
    outerClassName.push("horizontally-center");
  } else {
    outerStyle += `${position.dirx}:${position[position.dirx]};`;
  }
  if (isCenter(position.diry)) {
    outerClassName.push("vertical-middle");
  } else {
    outerStyle += `${position.diry}:${position[position.diry]};`;
  }
  return {
    innerStyle,
    outerStyle,
    outerClassName,
  };
}

function toitem(config) {
  // const { outerClassName, outerStyle, innerStyle } = getStyle(config)
  /* var template = `<div class="${outerClassName.join(
    ' '
  )}" style="${outerStyle}">
    <div class="inner-item" style="${innerStyle}">
      <${config.component} ref="${config.component + 'Ref'}"${getProps(
    config
  )}${getEvents(config)}></${config.component}>
    </div>
  </div>` */
  const { position } = config;

  var template = `<div style="position:absolute;width:${
    position.width
  };height:${position.height};left:${position.left};top:${position.top};">
      <${config.component} ref="${
    config.component + "Ref" + config.codeIndex
  }"${getProps(config)}${getEvents(config)}></${config.component}>
  </div>`;

  return {
    template,
  };
}

/* function getData(config) {
  const map = {}
  for (let i in config.data) {
    map[config.component + i + config.id] = config.data[i]
    // config.methods[i] = config.component + config.methods[i].toString()
  }
  return map
} */
function getCurrentData(config) {
  return `${getDataName(config)}${_GET_CURRENT_DATA} () {
    return this.${getDataName(config)}
  }`;
}
function getOtherData(config) {
  return `${getDataName(config)}_GET_OTHER_DATA () {
    return this.${getDataName(config)}
  }`;
}
function packageComponents(page) {
  let defId = 0;
  const list = page.components;
  const importCompMap = {};
  const componentList = [];
  const importedCtnArr = [];
  // 方法
  const methodsMapStr = [];
  const templateList = [];
  let dataListMap = {};
  list.forEach((it) => {
    it.id = it.id || defId++;
    const { template } = toitem(it);
    // 模板的引入
    templateList.push(template);
    if (componentList.indexOf(it.component) == -1) {
      componentList.push(it.component);
    }
    // 数据
    dataListMap = {
      ...dataListMap,
      [getDataName(it)]: it.data,
    };
    // 引入
    if (!importCompMap[it.component]) {
      importedCtnArr.push(
        `import ${it.component} from '@/components/${it.component}'`
      );
      importCompMap[it.component] = true;
    }
    // 方法的
    methodsMapStr.push(getCurrentData(it));
    for (let i in it.methods) {
      methodsMapStr.push(
        it.methods[i].replace(
          /GET_CURRENT_DATA/gi,
          getDataName(it) + _GET_CURRENT_DATA
        )
      );
    }
  });

  return `
<template>
<div style="background-image:url(${
    page.backgroundSrc
  });background-size:100% 100%;width:100%;height:100%;">
  ${templateList.join("\n")}
</div>
</template>
<script>
  ${importedCtnArr.join("\n")}

  export default {
    name: '',
    components: { ${componentList.join(", ")} },
    data () {
      return ${JSON.stringify(dataListMap)}
    },
    mounted () {
      
    },
    computed: {},
    methods: {
      ${methodsMapStr.join(",\n")}
    }
  }
</script>`;
}

exports.packageComponents = packageComponents;

exports.setPageName = function (pages) {
  let compNameId = 0;
  pages.forEach((it) => {
    const compName = it.name || "Comp" + compNameId++;
    it.name = compName;
  });
};
exports.packageRouter = function (pages) {
  const list = pages.map((it) => {
    const compName = it.name;
    return `{
        path: '${it.path}',
        name: '${compName}',
        component() { return import(/* webpackChunkName:'${compName}' */ '@/views/${compName}')},
      }`;
  });
  return `const router = [${list.join(",\n")}]
  
  export default router
  `;
};

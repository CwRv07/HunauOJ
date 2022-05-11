<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-10 17:16:07
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-11 16:50:47
 * @Description: CodeMirror二次封装
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div id="RvCodeMirror">
    <!-- 设置-start -->
    <section class="setting">
      <!-- 语言选择 -->
      <div class="mode-select">
        <el-select placeholder="代码语言" v-model="mode" size="default" @change="changeMode">
          <el-option v-for="item in modeOption" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <!-- 工具栏 -->
      <div class="extra-tool" v-if="toolOption.length">
        <!-- Item -->
        <el-popover v-for="item in toolOption" :key="item.title" placement="bottom" :title="item.title" :width="160" trigger="hover" :content="item.content" transition="el-zoom-in-top">
          <template #reference>
            <el-button type="text" size="default" @click="item.callback">
              <el-icon :size="20" color="var(--el-text-color-primary)">
                <component :is="item.icon" />
              </el-icon>
            </el-button>
          </template>
        </el-popover>
      </div>
    </section>
    <!-- 设置-end -->
    <!-- codemirror -->
    <codemirror class="code-mirror" :options="cmOptions" @ready="initCodeMirror" />
  </div>
</template>
<script lang="ts" setup name="code-mirror">
import codemirror from 'codemirror-editor-vue3';
// 核心样式
import './settings';

/* setting-start */

// modeOption
const mode = ref('text/x-java');
const modeOption = reactive([
  { label: 'C++', value: 'text/x-c++src' },
  { label: 'Java', value: 'text/x-java' },
  { label: 'Python', value: 'text/x-python' },
]);
const changeMode = (val: string) => {
  coderMirror.value.setOption('mode', val);
};

// themeOption
// const theme = ref('');
// const themeOption = reactive([
//   { label: 'solarized', value: 'solarized', default: true },
//   { label: 'material', value: 'material' },
//   { label: 'material-ocean', value: 'material-ocean' },
// ]);
// const changeTheme = (val: string) => {
//   coderMirror.value.setOption('theme', val);
// };

// toolOption
const refreshCode = () => {
  console.log('refreshCode');
};
const displayKeyMap = () => {
  console.log('displayKeyMap');
};
const settingCodeMirror = () => {
  console.log('settingCodeMirror');
};
const toolOption = reactive([
  { title: '重置代码', content: '还原到默认代码模板', icon: 'Refresh', callback: refreshCode },
  { title: '快捷键帮助', content: '显示所有编辑快捷键', icon: 'InfoFilled', callback: displayKeyMap },
  { title: '编辑器设置', content: '代码编辑器设置', icon: 'Setting', callback: settingCodeMirror },
]);

/* setting-end */

/* CodeMirror-start */
const cmOptions = {
  // codemirror options
  tabSize: 4,
  mode: 'text/x-java',
  /*
   C:text/x-csrc  C++:text/x-c++src  Java:text/x-java C#:text/x-csharp  Python:text/x-python
  */
  theme: 'solarized',
  // 显示行号
  lineNumbers: true,
  line: true,
  // 代码折叠
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  lineWrapping: true,
  // 选中文本自动高亮，及高亮方式
  styleSelectedText: true,
  showCursorWhenSelecting: true,
  highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
  // extraKeys: { Ctrl: 'autocomplete' }, //自定义快捷键
  matchBrackets: true, //括号匹配
  indentUnit: 4, //一个块（编辑语言中的含义）应缩进多少个空格
  styleActiveLine: true,
  autoCloseBrackets: true,
  autoCloseTags: true,
  hintOptions: {
    // 当匹配只有一项的时候是否自动补全
    completeSingle: false,
  },
  // 自动整理
  autoRefresh: true,
};
/* coderMirror instance */
const coderMirror: any = ref({});

/* coderMirror initFunc */
const initCodeMirror = (cm: any) => {
  // 初始化实例
  coderMirror.value = cm;
  // 自动补全功能添加
  cm.on('inputRead', (instance: any, changeObj: any) => {
    if (/\w|\./g.test(changeObj.text[0]) && changeObj.origin !== 'complete') {
      instance.showHint();
    }
  });
  // 自定义快捷键
  cm.setOption('extraKeys', {
    'Ctrl-F': function (cm: any) {
      console.log('Ctrl-F');
    },
    'Ctrl-S': function (cm: any) {
      console.log('Ctrl-S');
    },
  });
};
</script>

<style lang="scss" scoped>
#RvCodeMirror {
  // 组件局部变量
  $cm-box-min-height: 620px;

  // 设置栏
  .setting {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // 语言选择 & 主题选择
    .mode-select,
    .theme-select {
      width: 140px;
      :deep(.el-input__inner) {
        text-align: center;
      }
    }

    // 工具栏
    .extra-tool {
      display: flex;
      align-items: center;
      :deep(.el-button) {
        padding-right: 5px;
      }
    }
  }

  // CodeMirror
  .code-mirror {
    height: $cm-box-min-height;
    // 代码样式
    font-size: 14px;
    line-height: 1.5;
    font-family: Consolas, Menlo, Courier, monospace;
  }
}
</style>

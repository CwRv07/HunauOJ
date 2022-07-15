<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-10 17:16:07
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-07-10 17:38:05
 * @Description: CodeMirror二次封装
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div id="RvCodeMirror">
    <!-- header:设置-start -->
    <section class="setting">
      <!-- 语言选择 -->
      <div class="mode-select">
        <el-select placeholder="代码语言" v-model="mode" size="default" @change="changeMode">
          <el-option
            v-for="item in modeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <!-- 工具栏 -->
      <div class="extra-tool" v-if="toolOption.length">
        <!-- Item -->
        <el-popover
          v-for="item in toolOption"
          :key="item.title"
          placement="bottom"
          :title="item.title"
          :width="160"
          trigger="hover"
          :content="item.content"
          transition="el-zoom-in-top"
        >
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
    <!-- header:设置-end -->

    <!-- main:codemirror-start -->
    <codemirror
      class="code-mirror"
      v-model:value="code"
      :options="cmOptions"
      @ready="initCodeMirror"
    />
    <!-- main:codemirror-end -->

    <!-- footer:submission-start -->
    <section class="submission">
      <!-- 测试案例操作 -->
      <!-- 按钮组 -->
      <div class="button-group">
        <el-button type="primary" @click="submitCodeMirror" :loading="isSubmitting">提交</el-button>
      </div>
    </section>
    <!-- footer:submission-end -->

    <!-- codemirror的设置模态框-start -->
    <section class="code-mirror-setting-modal">
      <el-dialog title="编辑器设置" v-model="settingModal.isShow" width="600px">
        <template #default>
          <main class="code-mirror-setting-modal-main">
            <ul class="setting-list" v-if="settingModal.settingList.length">
              <li class="setting-item" v-for="item in settingModal.settingList" :key="item.title">
                <aside class="description">
                  <p class="description-title">{{ item.title }}</p>
                  <span class="description-sub-title">{{ item.subTitle }}</span>
                </aside>
                <aside class="selection">
                  <template v-if="item.mode === settingMode.SELECT">
                    <el-select v-model="item.selectValue" @change="item.changCallBack">
                      <el-option
                        v-for="option in item.option"
                        :key="option.value"
                        :label="option.label"
                        :value="option.value"
                      />
                    </el-select>
                  </template>
                  <template v-else-if="item.mode === settingMode.NUMBER">
                    <el-input-number
                      v-model="item.selectValue"
                      v-bind="item.bindProp"
                      @change="item.changCallBack"
                    />
                  </template>
                </aside>
              </li>
            </ul>
          </main>
        </template>
      </el-dialog>
    </section>
    <!-- codemirror的设置模态框-end -->
  </div>
</template>
<script lang="ts" setup name="code-mirror">
import { ElMessageBox, ElMessage } from 'element-plus';
import codemirror from 'codemirror-editor-vue3';
// 核心设置文件
import './settings';

/* Setting-start */
// value
const code = ref('');
// modeOption
const mode = ref('text/x-c++src');
const modeOption = reactive([
  { label: 'C++', value: 'text/x-c++src' },
  { label: 'Java', value: 'text/x-java' },
  { label: 'Python', value: 'text/x-python' },
]);
// 缓存
const modeCache: { [key: string]: string } = {};
const changeMode = (val: string) => {
  // 缓存
  modeCache[mode.value] = code.value;
  // 修改mode
  coderMirror.value.setOption('mode', val);
  // 读取缓存
  code.value = modeCache[val] || '';
};

// toolOption-start
const refreshCode = () => {
  ElMessageBox.confirm('您将放弃当前代码并还原至默认代码模板', '警告', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    code.value = '';
    modeCache[mode.value] = code.value;
    ElMessage({
      type: 'success',
      message: '重置代码成功',
      showClose: true,
    });
  });
};
const displayKeyMap = () => {
  ElMessage({
    type: 'info',
    message: '快捷键功能暂未完善',
    showClose: true,
  });
};
const settingCodeMirror = () => {
  settingModal.isShow = true;
};
const toolOption = reactive([
  {
    title: '重置代码',
    content: '还原到默认代码模板',
    icon: 'Refresh',
    callback: refreshCode,
  },
  {
    title: '快捷键帮助',
    content: '显示所有编辑快捷键',
    icon: 'InfoFilled',
    callback: displayKeyMap,
  },
  {
    title: '编辑器设置',
    content: '代码编辑器设置',
    icon: 'Setting',
    callback: settingCodeMirror,
  },
]);
// toolOption-end
/* Setting-end */

/* CodeMirror-start */
const cmOptions = {
  // codemirror options
  tabSize: 4,
  mode: 'text/x-c++src',
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
// instance
const coderMirror: any = ref({});
// initFunc
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
/* CodeMirror-end */

/* Submission-start */
const isSubmitting = ref(false);
const submitCodeMirror = () => {
  if (!isSubmitting.value) {
    isSubmitting.value = true;
    // 模拟提交
    setTimeout(() => {
      isSubmitting.value = false;
      ElMessage({
        type: 'success',
        message: '提交成功',
        showClose: true,
      });
    }, 2000);
  }
};
/* Submission-end */

/* CodeMirrorSettingModal-start */
// 设置模式
enum settingMode {
  NUMBER, // 输入框
  SELECT, // 选择器
}
// 主题设置
const theme = ref('solarized');
const changeThemeCallBack = (val: string) => {
  coderMirror.value.setOption('theme', val);
};
// 字体设置
const fontSizeNumber = ref(14);
const fontSize = computed(() => fontSizeNumber.value + 'px');
// Tab长度
const tabSize = ref(4);
const changeTabSizeCallBack = (val: number) => {
  coderMirror.value.setOption('tabSize', val);
};
// 模态框
const settingModal: any = reactive({
  isShow: false,
  settingList: [
    {
      title: '主题设置',
      subTitle: '切换不同的代码编辑器主题',
      selectValue: theme,
      changCallBack: changeThemeCallBack,
      mode: settingMode.SELECT,
      option: [
        { label: 'solarized', value: 'solarized' },
        { label: 'material', value: 'material' },
        { label: 'material-ocean', value: 'material-ocean' },
      ],
    },
    {
      title: '字体设置',
      subTitle: '自定义调节适宜的字体大小',
      selectValue: fontSizeNumber,
      changCallBack: undefined,
      mode: settingMode.NUMBER,
      bindProp: {
        min: 10,
        max: 20,
      },
    },
    {
      title: 'Tab长度',
      subTitle: '选择你想要的Tab长度',
      selectValue: tabSize,
      changCallBack: changeTabSizeCallBack,
      mode: settingMode.NUMBER,
      bindProp: {
        min: 1,
        max: 10,
      },
    },
  ],
});
/* CodeMirrorSettingModal-end */
</script>

<style lang="scss" scoped>
#RvCodeMirror {
  // 组件局部变量
  $cm-box-min-height: calc(100vh - 42px - 42px - 2px);

  /* 设置-start */
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
  /* 设置-end */

  /* CodeMirror-start */
  .code-mirror {
    height: $cm-box-min-height;
    // 代码样式
    font-size: v-bind(fontSize);
    line-height: 1.5;
    font-family: Consolas, Menlo, Courier, monospace;
  }
  /* CodeMirror-end */

  /* Submission-start */
  .submission {
    padding: 5px;
    display: flex;
    justify-content: flex-end;
    align-content: center;
  }
  /* Submission-end */

  /* CodeMirror-SettingModal-start */
  .code-mirror-setting-modal {
    line-height: 1.5;
    :deep(.el-dialog__body) {
      padding: 15px;
      border-top: 1px solid var(--el-border-color);
    }

    .code-mirror-setting-modal-main {
      .setting-list {
        .setting-item {
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .description {
            .description-title {
            }
            .description-sub-title {
              color: var(--el-text-color-secondary);
              font-size: var(--el-font-size-small);
            }
          }
          .selection {
            width: 150px;
          }
        }
      }
    }
  }
  /* CodeMirror-SettingModal-end */
}
</style>

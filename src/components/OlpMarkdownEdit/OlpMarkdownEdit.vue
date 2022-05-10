<!--
 * @Author: ND_LJQ
 * @Date: 2022-05-10 17:12:04
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-05-10 22:03:06
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->

<template>
  <md-editor v-model="text" :language="language" :language-user-defined="languageUserDefined" />
  <h1>{{ text }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

export default defineComponent({
  components: { MdEditor },
  data() {
    return {
      text: '',
      // 定义语言名称
      language: 'my-lang',
      // 定义语言具体内容
      languageUserDefined: {
        'my-lang': {
          toolbarTips: {
            bold: '加粗 Ctrl+B',
            underline: '下划线 Ctrl+U',
            italic: '斜体 Ctrl+I',
            strikeThrough: '删除线 Ctrl+Shift+S',
            title: '标题',
            sub: '下标 Ctrl+↓',
            sup: '上标 Ctrl+↑',
            quote: '引用 Ctrl+Q',
            unorderedList: '无序列表 Ctrl+Shift+U',
            orderedList: '有序列表 Ctrl+O',
            codeRow: '行内代码 Ctrl+Alt+C',
            code: '块级代码 Ctrl+Shift+S',
            link: '链接 Ctrl+L',
            image: '图片',
            table: '表格 Ctrl+Shift+Alt+T',
            mermaid: 'mermaid图',
            katex: '公式',
            revoke: '后退',
            next: '前进',
            save: '保存',
            prettier: 'Prettier美化代码格式 Ctrl+Shift+F',
            pageFullscreen: '浏览器全屏',
            fullscreen: '屏幕全屏',
            preview: '预览',
            htmlPreview: 'html代码预览',
            catalog: '目录',
            github: '源码地址',
          },
          titleItem: {
            h1: '一级标题 Ctrl+1',
            h2: '二级标题 Ctrl+2',
            h3: '三级标题 Ctrl+3',
            h4: '四级标题 Ctrl+4',
            h5: '五级标题 Ctrl+5',
            h6: '六级标题 Ctrl+6',
          },
          imgTitleItem: {
            link: '添加链接 Ctrl+Shift+I',
            upload: '上传图片',
            clip2upload: '裁剪上传',
          },
          linkModalTips: {
            title: '添加',
            descLable: '链接描述：',
            descLablePlaceHolder: '请输入描述...',
            urlLable: '链接地址：',
            UrlLablePlaceHolder: '请输入链接...',
            buttonOK: '确定',
          },
          clipModalTips: {
            title: '裁剪图片上传',
            buttonUpload: '上传',
          },
          copyCode: {
            text: '复制代码',
            tips: '已复制',
          },
          mermaid: {
            flow: '流程图',
            sequence: '时序图',
            gantt: '甘特图',
            class: '类图',
            state: '状态图',
            pie: '饼图',
            relationship: '关系图',
            journey: '旅程图',
          },
          katex: {
            inline: '行内公式',
            block: '块级公式',
          },
        },
      },
    };
  },
});

// async onUploadImg(files: Array<File>, callback: (urls: string[]) => void) {
//   const res = await Promise.all(
//     files.map((file) => {
//       return new Promise((rev, rej) => {
//         const form = new FormData();
//         form.append('file', file);

//         axios
//           .post('/api/img/upload', form, {
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             }
//           })
//           .then((res) => rev(res))
//           .catch((error) => rej(error));
//       });
//     })
//   );

//   callback(res.map((item: any) => item.data.url));
// }
</script>

<style lang="scss" scoped></style>

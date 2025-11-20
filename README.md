# table-convert

一个基于 React + TypeScript + Vite 的轻量「表格格式转换」工具。内置自定义公式，帮助你在页面里把文本或表头快速转换成常用格式，比如 Ant Design Table 的 `columns` 配置或小驼峰命名。

## 功能特性

- 在页面中使用内置公式进行转换
  - `TO_ANTD_COLUMNS(label, name, endComma)`：把表头与字段名转换为 AntD Table 的列配置
  - `TO_CAMEL_CASE(text)`：把任意文本转换为小驼峰（camelCase）
- 支持从单元格区域中取值（数组会取左上单元格）
- 与 `@univerjs` 表格生态集成，使用体验接近电子表格函数

## 预览

本地启动后访问浏览器页面进行体验（详见下文「本地开发」）。

## 使用内置公式

### 1) TO_ANTD_COLUMNS

- 作用：生成 Ant Design Table 的 `columns` 列配置片段
- 签名：`TO_ANTD_COLUMNS(label, name, endComma)`
  - `label`：列头显示文字
  - `name`：字段名（会自动转为小驼峰 `camelCase`）
  - `endComma`：是否在末尾添加逗号，`TRUE()`/`1`/`"true"` 表示添加

示例：

```
=TO_ANTD_COLUMNS(A2, B2, TRUE())
```

可能输出：

```
{ title: "用户名", dataIndex: "userName" },
```

### 2) TO_CAMEL_CASE

- 作用：把文本转换为小驼峰（camelCase）
- 签名：`TO_CAMEL_CASE(text)`

示例：

```
=TO_CAMEL_CASE("hello world")
```

输出：

```
helloWorld
```

## 本地开发

前置依赖：

- Node.js 18+（推荐）
- 包管理器：pnpm（推荐）

安装依赖：

```
pnpm install
```

启动开发服务器：

```
pnpm dev
```

构建生产包：

```
pnpm build
```

本地预览生产包：

```
pnpm preview
```

## 技术栈

- React 18 / 19
- TypeScript
- Vite
- @univerjs（表格与公式基础）
- es-toolkit（`camelCase` 能力）

## 目录结构（节选）

```
src/
  formula/
    TO_ANTD_COLUMNS.ts   // 生成 AntD Table columns
    TO_CAMEL_CASE.ts     // 文本转小驼峰
  ...
```

## 许可

本项目仅用于演示与内部使用，如需开源协议或授权说明，请在此补充。

---

更新日期：2025-11-20

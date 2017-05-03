# pon-writer@1.0.3

File writer for pon

+ Functions
  + [create(args)](#pon-writer-function-create)
+ [`PonWriter`](#pon-writer-class) Class
  + [new PonWriter()](#pon-writer-class-pon-writer-constructor)
  + [writer.write(filename, content, options)](#pon-writer-class-pon-writer-write)

## Functions

<a class='md-heading-link' name="pon-writer-function-create" ></a>

### create(args) -> `PonWriter`

Create a PonWriter instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |



<a class='md-heading-link' name="pon-writer-class"></a>

## `PonWriter` Class

Writer for pon




<a class='md-heading-link' name="pon-writer-class-pon-writer-constructor" ></a>

### new PonWriter()

Constructor of PonWriter class



<a class='md-heading-link' name="pon-writer-class-pon-writer-write" ></a>

### writer.write(filename, content, options) -> `Promise.<WriteResult>`

Write into file

| Param | Type | Description |
| ----- | --- | -------- |
| filename | string | Filename to write |
| content | string,Buffer,ReadableStream | Content to write |
| options | Object | Optional settings |
| options.mkdirp | boolean | Make parent directory |
| options.skipIfIdentical | boolean | Skip to write if identical |
| options.cwd | string | Current working directory |





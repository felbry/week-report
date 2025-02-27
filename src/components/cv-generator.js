import {
  Document,
  Paragraph,
  // HeadingLevel,
  AlignmentType,
  TextRun
} from 'docx'

const FONT_SIZE = {
  TITLE: 22 * 2,
  DATE: 12 * 2,
  SECTION_TITLE: 16 * 2,
  SECTION_SUB_TITLE: 14 * 2,
  TEXT: 11 * 2
}

export class CVCreator {
  create (data) {
    console.log(data)
    const { isShowCurrentWeekProgress, name, currentJob, nextJob, suggestion, train, unresolved, dateRange } = data
    const document = new Document({
      sections: [
        {
          children: [
            // 总标题
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `综合研发业务部周报—${name}`,
                  font: 'Microsoft Yahei',
                  size: FONT_SIZE.TITLE,
                  bold: true
                })
              ]
            }),
            // 日期
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  // eslint-disable-next-line
                  text: `（${dateRange[0]} - ${dateRange[1]}）`,
                  font: 'Microsoft Yahei',
                  size: FONT_SIZE.DATE
                })
              ]
            }),
            // 第1章
            new Paragraph({
              children: [
                new TextRun({
                  text: '一、本周完成重点工作',
                  font: 'Microsoft Yahei',
                  size: FONT_SIZE.SECTION_TITLE,
                  bold: true
                })
              ]
            }),
            ...currentJob.map((form, formIndex) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${formIndex + 1}、${form.title}`,
                    font: 'Microsoft Yahei',
                    size: FONT_SIZE.SECTION_SUB_TITLE,
                    bold: true
                  })
                ],
                indent: {
                  left: 360
                }
              }),
              ...form.list.map((item, itemIndex) =>
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${itemIndex + 1}）${item.content}${isShowCurrentWeekProgress ? `   ----${item.progress}%` : ''}`,
                      font: 'Microsoft Yahei',
                      size: FONT_SIZE.TEXT
                    })
                  ],
                  indent: {
                    left: 720
                  }
                })
              )
            ]).flat(1),
            // 第2章
            new Paragraph({
              children: [
                new TextRun({
                  text: '二、下周重点工作',
                  font: 'Microsoft Yahei',
                  size: FONT_SIZE.SECTION_TITLE,
                  bold: true
                })
              ]
            }),
            ...nextJob.map((form, formIndex) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${formIndex + 1}、${form.title}`,
                    font: 'Microsoft Yahei',
                    size: FONT_SIZE.SECTION_SUB_TITLE,
                    bold: true
                  })
                ],
                indent: {
                  left: 360
                }
              }),
              ...form.list.map((item, itemIndex) =>
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${itemIndex + 1}）${item.content}${item.progress ? `   ----${item.progress}%` : ''}`,
                      font: 'Microsoft Yahei',
                      size: FONT_SIZE.TEXT
                    })
                  ],
                  indent: {
                    left: 720
                  }
                })
              )
            ]).flat(1),
            // 第3章
            new Paragraph({
              children: [
                new TextRun({
                  text: '三、意见建议',
                  font: 'Microsoft Yahei',
                  size: FONT_SIZE.SECTION_TITLE,
                  bold: true
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: suggestion || '暂无',
                  font: 'Microsoft Yahei',
                  size: FONT_SIZE.TEXT
                })
              ],
              indent: {
                left: 360
              }
            }),
            // 第4章
            new Paragraph({
              children: [
                new TextRun({
                  text: '四、培训需求',
                  font: 'Microsoft Yahei',
                  size: FONT_SIZE.SECTION_TITLE,
                  bold: true
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: train || '暂无',
                  font: 'Microsoft Yahei',
                  size: FONT_SIZE.TEXT
                })
              ],
              indent: {
                left: 360
              }
            }),
            // 第5章
            new Paragraph({
              children: [
                new TextRun({
                  text: '五、待解决问题',
                  font: 'Microsoft Yahei',
                  size: FONT_SIZE.SECTION_TITLE,
                  bold: true
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: unresolved || '暂无',
                  font: 'Microsoft Yahei',
                  size: FONT_SIZE.TEXT
                })
              ],
              indent: {
                left: 360
              }
            })
          ]
        }
      ]
    })
    return document
  }
}

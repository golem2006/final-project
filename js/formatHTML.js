// function formatHtml(html) {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, 'text/html');
//     const serializer = new XMLSerializer();
//     let formattedHtml = serializer.serializeToString(doc);
  
//     // Дополнительная обработка для удаления лишних тегов, добавленных DOMParser
//     formattedHtml = formattedHtml.replace('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>', '');
//     formattedHtml = formattedHtml.replace('</body></html>', '');
  
//     formattedHtml = formattedHtml.replace(/<\/(p|div|span|h1|h2|h3|h4|h5|h6|li|ul|ol|pre|textarea)>/g, '</$1>\<br>');

//     return formattedHtml;
//   }
function formatHTML(htmlCode, indentSize = 4) {
  /**
   * Форматирует HTML-код, добавляя отступы для улучшения читаемости.
   *
   * @param {string} htmlCode Строка, содержащая HTML-код, который нужно отформатировать.
   * @param {number} [indentSize=4] Количество пробелов для каждого уровня отступа.
   * @returns {string} Строка, содержащая отформатированный HTML-код.
   */

  const lines = htmlCode.trim().replace(/>\s*</g, '>\n<').split('\n');
  let formattedLines = [];

  for (const line of lines) {
    const trimmedLine = line.trim();
    //console.log(trimmedLine);
    if (!trimmedLine) continue;  // Пропускаем пустые строки

    // Уменьшаем отступ перед закрывающими тегами
    // if (trimmedLine.startsWith('</')) {
    //   console.log(index);
    // }

    // Добавляем отступ
    const indentedLine = ' '.repeat(indentSize) + trimmedLine;
    formattedLines.push(indentedLine);

    // Увеличиваем отступ после открывающих тегов (кроме самозакрывающихся)
    // if (trimmedLine.startsWith('<') && !trimmedLine.endsWith('/>') && !trimmedLine.startsWith('</')) {
    //   indentLevel++;
    // }
  }

  // Удаление отступа перед закрывающим тегом textarea
  formattedLines.forEach((element, index) => {
    if (element == "    </textarea>") {
      formattedLines[index - 1] += '</textarea>';
      formattedLines.splice(index, 1);
    }
  });

  formattedLines[0] = '<form>';
  formattedLines[formattedLines.length - 1] = '</form>';
  return formattedLines.join('\n');
}
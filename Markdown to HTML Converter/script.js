const markdownInput = document.querySelector("#markdown-input");
const htmlOutput = document.querySelector("#html-output")
const preview = document.querySelector("#preview");

function convertMarkdown(){
    let markdown = markdownInput.value;

    //Headers
    markdown = markdown.replace(/^### (.+)$/gm, "<h3>$1</h3>");
    markdown = markdown.replace(/^## (.+)$/gm, "<h2>$1</h2>");
    markdown = markdown.replace(/^# (.+)$/gm, "<h1>$1</h1>");
    
    // Bold 
    markdown = markdown.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    markdown = markdown.replace(/__(.+?)__/g, "<strong>$1</strong>");

    // Italic
    markdown = markdown.replace(/\*(.+?)\*/g, "<em>$1</em>");
    markdown = markdown.replace(/_(.+?)_/g, "<em>$1</em>");

    //  Images
    markdown = markdown.replace(/!\[(.+?)\]\((.+?)\)/g, '<img alt="$1" src="$2">');

    // Blockquotes
    markdown = markdown.replace(/^[ \t]*> (.+)$/gm, "<blockquote>$1</blockquote>");

    // Links
    markdown = markdown.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

    // Remove new lines from the final HTML
    markdown = markdown.replace(/\r?\n/g, "");

    return markdown;
}


// This part listens to the markdown box for input then changes the other boxes with the html markdown applied.
markdownInput.addEventListener("input", () => {
    const convertedHTML = convertMarkdown();

    // show raw HTML in output box
    htmlOutput.textContent = convertedHTML;

    //Render HTML in preview
    preview.innerHTML = convertedHTML;

});
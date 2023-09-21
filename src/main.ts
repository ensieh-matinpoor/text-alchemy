import {replaceSpelling} from "./replaceSpelling.ts";

const fileInput: HTMLInputElement | null = document.querySelector("input[type=file]");
if (fileInput == null) {
    throw new Error("No file input found");
}

function download(filename: string, text: string) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

fileInput.addEventListener("change", async () => {
    if (fileInput.files == null) {
        throw new Error("No file input found");
    }
    const file = fileInput.files.item(0);

    if (file) {
        const text = replaceSpelling(await file.text());
        download("output.txt", text)
    }
});

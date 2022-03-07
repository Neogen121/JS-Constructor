export function row(content, styles = "") {
    return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`;
}

export function css(styles = {}) {
    if (typeof styles === "string") return styles;
    const toString = (key) => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(";");
}

export function formBlock(type, inputBlocks, index, length) {
    let inner = inputBlocks.join("");
    return `
    <form onsubmit="apply(event, ${index})">
        <h5>${type}</h5>
        ${inner}
        <button type="submit" class="btn btn-primary btn-sm">Сохранить</button>
        <button type="button" class="btn btn-danger btn-sm" onclick="remove(${index})">Удалить</button>
        <button type="button" class="btn btn-secondary btn-sm" onclick="moveUp(${index})" ${index === 0 ? "disabled" : ""}>↑</button>
        <button type="button" class="btn btn-secondary btn-sm" onclick="moveDown(${index})" ${
        index === length - 1 ? "disabled" : ""
    }>↓</button>
        </form>
    <hr />
    `;
}

export function inputBlock(name, value) {
    return `
        <div class="form-group">
            <labe>${name}<input class="form-control form-control-sm" name="${name}" value="${value}"></label>
        </div>
    `;
}

export function addingBlock(blockList) {
    let list = [`<option selected value="">Add Block:</div>`];
    list.push(...blockList.map((x) => `<option value="${x}"> - ${x}</div>`));
    return `
    <select class="form-select" onchange="addBlock(event)">${list.join("")}
    </select>    
    `;
}

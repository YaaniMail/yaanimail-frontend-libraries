export class ContactConfig {
    sortName: string;
    search: string;
    tagName: string;
    offset: number;
    page: number;
    perPage: number;
    isGroup: any;

    constructor() {
        this.offset = 0;
        this.page = 1;
        this.perPage = 10;
        this.isGroup = undefined;
        this.sortName = 'name';
        this.search = '';
        this.tagName = '';
    }

    setOffset(offset: number): void {
        this.offset = offset;
    }

    setPage(page: number): void {
        this.page = page;
    }

    setPerPage(perPage: number): void {
        this.perPage = perPage;
    }

    setSortName(sortName: string): void {
        this.sortName = sortName;
    }

    setSearchKeyword(keyword: string): void {
        this.search = keyword;
    }

    setTagName(tagName: string): void {
        this.tagName = tagName;
    }

    getMyContactFilter(): string {
        let url = "";

        url = `${url}?offset=${this.offset}`;

        if (this.tagName) {
            url = `${url}&tag_name=${this.tagName}`;
        }
        if (this.perPage) {
            url = `${url}&limit=${this.perPage}`;
        }
        if (this.sortName !== "") {
            url = `${url}&order_type=${this.sortName}`;
        }
        if (this.search !== "") {
            url = `${url}&search=${this.search}`;
        }
        return url;
    }

    getGlobalContactFilter(): string {
        let url = "";

        url = `${url}?page=${this.page}`;

        if (this.perPage) {
            url = `${url}&perPage=${this.perPage}`;
        }
        if (this.sortName !== "") {
            url = `${url}&sort=${this.sortName}`;
        }
        if (this.search !== "") {
            url = `${url}&search=${this.search}`;
        }
        if (this.isGroup !== undefined) {
            url = `${url}&is_group=${this.isGroup}`;
        }
        return url;
    }

    getContactLabelFilter(): string {
        return 'tag_name=' + this.tagName + '&' + this.getMyContactFilter();
    }
}

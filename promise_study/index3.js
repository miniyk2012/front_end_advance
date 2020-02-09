function wait(message, ms) {
    return new Promise(r => setTimeout(function () {
        r(message);
    }, ms));
}

// 批量异步运行
urls = ['www.baidu.com', 'www.google.com', 'www.xx.com'];
urls.map(async url => {
    let message = await wait(url, 500);
    console.log(message);
});
console.log('next line');

class Storage {
    constructor() {
        this.wait = wait('avatar', 500);
    }

    async getAvatar() {
        return await this.wait;
    }
}

const storage = new Storage();
storage.getAvatar().then(ret => console.log(ret)); 

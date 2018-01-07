"use strict";
/**
 * company-news 公司新闻
 * xgqfrms
 * creadted 2017.10.16
 * @param {* String} url
 * @param {* Array} tds
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */
// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Modules.companyNews = STOCK_F9_FV.Modules.companyNews || (
    (url = ``, uid = `id`, ip = `http://10.1.5.202`, debug = false) => {
        let data = [];
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                data = json;// Array
                if (debug) {
                    console.log(`data = \n`, data);
                }
                if (Array.isArray(data) && data.length > 0) {
                    let html_string = ``;
                    let arr = data;
                    arr.map(
                        (obj, i) => {
                            let publishDate = (arr[i].xwsj !== undefined) ? arr[i].xwsj : `暂无数据`,
                                title = `${(arr[i].xwtitle !== undefined) ? arr[i].xwtitle : `暂无数据`}`,
                                id = `${(arr[i].newid !== undefined) ? arr[i].newid : `暂无数据`}`;
                            // news no type!
                            title = title.replace(/(：：)/ig, "：");
                            if (i < 5) {
                                html_string += `
                                    <tr class="fv-company-news-table-tr">
                                        <td class="fv-company-news-table-td-key" data-value="data-fv-company-news">
                                            ${publishDate}
                                        </td>
                                        <td class="fv-company-news-table-td-value" data-value="data-fv-company-news">
                                            <a
                                                href="#${id}"
                                                title="${title}"
                                                data-title="${title}"
                                                data-link="fv-company-news-link"
                                                data-disabled="${id !== "null" ? false : true}"
                                                data-link-detail="company-news-link-detail-module"
                                                data-newsId="${id}">
                                                ${title}
                                            </a>
                                        </td>
                                    </tr>
                                `;
                                // no target="_blank"
                            }else{
                                // only show 5 items
                            }

                        }
                    );
                    let td_id = document.querySelector(uid);
                    td_id.innerHTML = html_string;
                    // open news modal
                    setTimeout(() => {
                        // const host = window.location.host ? window.location.host : `10.1.5.202`;
                        // const host = `http://10.1.5.202`;
                        const host = ip;
                        // absolute url ip
                        let links = document.querySelectorAll(`[data-link="fv-company-news-link"]`);
                        if (debug) {
                            console.log(`links = \n`, links);
                        }
                        for (let i = 0; i < links.length; i++) {
                            links[i].addEventListener(`click`, (e) => {
                                e.preventDefault();
                                // #hash
                                let id = e.target.dataset.newsid,
                                    title = e.target.dataset.title;
                                try {
                                    let open_link = `${host}/queryservice/news/content/${id}`;
                                    if (debug) {
                                        console.log(`id = ${id} \ntitle = ${title}`);
                                        // no need title
                                    }
                                    // fetch news summary data
                                    let data = {};
                                    fetch(open_link)
                                    .then(res => res.json())
                                    .then(
                                        (json) => {
                                            if (debug) {
                                                console.log(`json = \n`, JSON.stringify(json, null, 4));
                                            }
                                            data = json;
                                            // BouncedModal
                                            const UDP_wh = UDP.getClientWidthHeight;
                                            if (debug) {
                                                console.log(`UDP_wh = \n`, JSON.stringify(UDP_wh, null, 4));
                                            }
                                            let UDP_width = UDP_wh.w - 60,
                                                UDP_height = UDP_wh.h - 60;
                                            // STOCK_F9_FV.Modal.BouncedModal
                                            const modal = new BouncedModal({
                                            // const modal = new UDP.BouncedModal({
                                                // bouncedclass: "layerContianer2",//存放页面的容器类名
                                                width: UDP_width,
                                                height: UDP_height,
                                                title: "公司新闻",
                                                // setOverflow: "overflow-y:none",
                                                //设置滚动的属性(overflow-y: 竖向  overflow-x: 横向)
                                                // str: html.join(''),// array to string
                                                // str: html_template,
                                                datas: Object.assign({}, data)
                                            });
                                            modal.init();
                                            // return json;
                                        }
                                    )
                                    .catch(err => console.log(`error infos = \n`, err));
                                } catch (err) {
                                    console.log(`${host}/queryservice/news/content/${id}: Error infos = \n`, err);
                                    // window.open(`${host}/queryservice/news/content/${id}`);
                                }
                            });
                        }
                    }, 0);
                }else{
                    let table_uid = document.querySelector(`.fv-company-news-table`),
                        // table_parent = table_uid.parentNode,
                        table_prev_dom = table_uid.previousElementSibling,
                        no_data_html = `
                            <div>
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            </div>
                        `;
                    // remove self
                    table_uid.remove();
                    // add no-data
                    table_prev_dom.insertAdjacentHTML(`afterend`, no_data_html);
                }
            }
        )
        .catch(error => console.log(`error = \n`, error));
    }
);



STOCK_F9_FV.Modules.companyNews.init = STOCK_F9_FV.Modules.companyNews.init || (
    (
        {
            ip,
            path,
            gilcode,
            skin
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/news/`,
            gilcode: `600570.SH`,
            skin: `white`
        }
    ) => {
        let uid = `#fv-company-news-tbody`,
            // url = `${ip}${path}${gilcode}`;
            url = `https://raio.xgqfrms.xyz/HTML5-Drag-Drop/F9-v2.0.0-modules/fast-preview/json/news.json`;
        STOCK_F9_FV.Modules.companyNews(url, uid, ip, false);
        // STOCK_F9_FV.Modules.companyNews(url, uid, ip, true);
    }
);


var STOCK_IP = window.STOCK_IP || `http://10.1.5.202`,
    STOCK_Paths = window.STOCK_Paths || `/webservice/fastview/stock`,
    STOCK_SecCode = window.STOCK_SecCode || `600570.SH`,
    STOCK_Skin = window.STOCK_Skin || `white`;


STOCK_F9_FV.Modules.companyNews.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/news/`,
    gilcode: STOCK_SecCode,
    skin: STOCK_Skin,
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/news/`,
    // gilcode: `600570.SH`
});

// const url = `http://10.1.5.202/webservice/fastview/stock/news/600570.SH`;


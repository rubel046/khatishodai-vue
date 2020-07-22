import _ from 'lodash';
import Vue from 'vue';

export function can(permissionName) {
    const user = JSON.parse(localStorage.getItem('user_data'));
    if (user) {
        if (user.is_owner) {
            return true;
        }
        return user.permissions.includes(permissionName);
    }

    // this.$store.subscribe(res => {
    //     const user = res.payload.user;
    //     if (user.is_admin) {
    //         return false;
    //     }
    //     //  return user.permissions.includes(permissionName);
    //
    // })


    // console.log(await this.$store.getters.getUser)

}

export default {
    isOwner() {
        const user = JSON.parse(localStorage.getItem('user_data'));
        return !!(user && user.is_owner);
    },

    pick(obj, keys = []) {
        return _.pick(obj, keys);
    },

    /**
     *Remove null/empty input fields
     */
    removeEmptyOrNull(obj) {
        Object.keys(obj).forEach(k =>
            (obj[k] && typeof obj[k] === 'object') && this.removeEmptyOrNull(obj[k]) ||
            (!obj[k] && obj[k] !== undefined) && delete obj[k]);
        return obj;
    },

    toastMessage(text = '369585', type = 'success', title = '', group = 'foo', duration = 10000,) {
        Vue.notify({
            type: type,
            group: group,
            title: title,
            text: text,
            duration: duration,
        });
    },

    handleError(res) {
        // let response = Object.values(res)[2];
        const response = res.response;

        if (response.status === 401) {
            location.href = '/login';

        } else if (response.status === 403) {
            location.href = '/errors/forbidden';

        } else if (response.status === 422) {
            //  const errors = response.data.errors;
            // for (const key in errors) {
            //     if (errors.hasOwnProperty(key)) {
            //         const singleError = errors[key];
            //         for (const k in singleError) {
            //             if (singleError && singleError.hasOwnProperty(k)) {
            //                 this.toastMessage(singleError[k], 'error');
            //             }
            //         }
            //     }
            // }

        } else {
            this.toastMessage(response.data.message, 'error');
        }
    },

    /**
     *Reformatted query params
     */
    formattedQueryParams(query) {
        let obj = Object.assign({}, query);

        Object.keys(query).forEach(key => {
            let value = query[key];
            if (value) {
                obj[key] = value
            } else {
                delete obj[key]
            }
        });
        return obj;
    },

    /**
     *Reformatted paginator params
     */
    formattedPaginationParams(pagination) {
        pagination = this.pick(pagination, ['page', 'itemsPerPage', 'items_per_page', 'sortBy', 'sortDesc']);

        let params = Object.keys(pagination).map(key => {
            if (pagination[key] instanceof Array) {
                if (pagination[key].length > 0) {
                    return key + '=' + pagination[key]
                }
            } else if (pagination[key]) {
                return key + '=' + pagination[key]
            }
        });

        params = params.filter(item => !!item).join('&');

        const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`); //function

        return camelToSnakeCase(params);
    },

    setPrevQueryParams(pagination) {
        const uri = window.location.search.substring(1);
        const params = new URLSearchParams(uri);
        const pageNo = params.get("page");
        const itemsPerPage = params.get("items_per_page");

        if (pageNo) {
            pagination.page = pageNo;
        }
        if (itemsPerPage) {
            pagination.itemsPerPage = +itemsPerPage;
        }

        return pagination;
    },


    /**
     *Per page dropdown options in paginator
     */
    defaultPerPageOptions() {
        return {
            'items_per_page_options': [5, 10, 15, 20, 50, 100, 200, 500],
            'items_per_page': 50,
        }
    },

    fileDownload(response, fileName = 'example.csv') {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
    },

    /**
     *Filter only ids for json array
     */
    extractedIts(items) {
        return items.map(function (item) {
            return item.id;
        });
    },

    yearList() {
        const currentYear = new Date().getFullYear()
        let yearArray = [];
        for (let year = currentYear - 1; year <= (currentYear + 1); year++) {
            yearArray.push(year)
        }
        return yearArray;
    }
}

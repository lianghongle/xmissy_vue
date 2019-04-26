const Mock = require('mockjs')

Mock.mock('http://vm.centos.xmissy_stock_plan_api/pro/stock/list', (req, res) => {
    {
        return Mock.mock({
            code: 200,
            data: {
                code: 0,
                msg: "",
                data:{
                    current_page: 1,
                    page_size: 10,
                    total_page: 11,
                    "list|11-11": [
                        {
                            "symbol|100000-700000": 100000,
                            "name":"@ctitle(4)",
                            "industry":"@ctitle(2,4)"
                        },
                    ]
                }
            }
        })
    }
})

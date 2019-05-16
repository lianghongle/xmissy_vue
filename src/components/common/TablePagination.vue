<template>
    <div class="table-pagination">

        <el-table
                border
                stripe
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    v-for="colConfig in this.options.columns"
                    :prop="colConfig.field"
                    :label="colConfig.title"
            >
                <!--<template slot-scope="scope">-->
                    <!--<i class="el-icon-time"></i>-->
                    <!--<span style="margin-left: 10px">1{{ scope.row.id }}</span>-->
                <!--</template>-->

            </el-table-column>

            <!--<el-table-column type="expand">-->
                <!--<template slot-scope="props">-->
                    <!--<el-form label-position="left" inline class="demo-table-expand">-->
                        <!--<el-form-item label="商品名称">-->
                            <!--<span>{{ props.row.name }}</span>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="所属店铺">-->
                            <!--<span>{{ props.row.shop }}</span>-->
                        <!--</el-form-item>-->
                    <!--</el-form>-->
                <!--</template>-->
            <!--</el-table-column>-->

        </el-table>

        <el-pagination
                v-if="this.computedOptions.pagination"
                background
                border
                stripe
                layout="total, sizes, prev, pager, next, jumper"
                size="mini"

                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"

                :current-page="currentPage"
                :page-sizes="[10, 25, 50, 100]"
                :page-size="pageSize"
                :total="total"
        >
        </el-pagination>

    </div>
</template>

<style>

</style>

<script>

    import axios from 'axios'

    export default {
        data() {
            return {
                total:0,
                currentPage:1,
                pageSize:10,
                tableData: [],
            }
        },
        props:{
            options:{},
        },
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            },
            computedOptions: function(){
                var default_options = {
                    url: '',// 请求后台的URL（*）
                    method: 'get',// 请求方式（*）
                    queryParams: function (params) {
                        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
                            limit: params.limit,   //页面大小
                            offset: params.offset
                        };
                        return temp;
                    },

                    striped: true,                      //是否显示行间隔色

                    pagination: true,                   //是否显示分页（*）
                    pageNumber: 1,                       //初始化加载第一页，默认第一页
                    pageSize: 10,                       //每页的记录行数（*）
                    pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）

                    columns: [
                        // {
                        //     field:'employees',
                        //     title:'员工人数',
                        //     formatter: function (value, row, index) {
                        //         return ''
                        //     } //自定义方法，添加操作按钮
                        // }
                    ],

                    table:{
                        size:"mini", // medium / small / mini
                    }
                }
                // return {...this.default_options, ...this.options}
                return {...default_options, ...this.options}
            }
        },
        methods: {
            handleSizeChange(val) {
                // window.console.log(`每页 ${val} 条`);
                this.pageSize = val
                axios
                    .get(this._options.url, {
                        params:{
                            page:this.currentPage,
                            page_size:this.pageSize
                        }
                    })
                    .then(response => {
                        this.total = response.data.data.data.total_page
                        this.currentPage = response.data.data.data.current_page
                        this.tableData = response.data.data.data.list
                    })
            },
            handleCurrentChange(val) {
                // window.console.log(`当前页: ${val}`);
                this.currentPage = val
                axios
                    .get(this._options.url, {
                        params:{
                            page:this.currentPage,
                            page_size:this.pageSize,
                        }
                    })
                    .then(response => {
                        this.total = response.data.data.data.total_page
                        this.currentPage = response.data.data.data.current_page
                        this.tableData = response.data.data.data.list
                    })
            },
            handleColumnFormatter(val) {
                return typeof val === "function"
            }
        },
        mounted () {
            axios
                .get(this.computedOptions.url)
                .then(response => {
                    window.console.log(this.computedOptions)
                    this.total = response.data.data.data.total_page
                    this.currentPage = response.data.data.data.current_page
                    this.tableData = response.data.data.data.list
                })
        },
    };
</script>

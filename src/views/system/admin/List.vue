<template>
    <div class="stock-basic">

        <el-form :inline="true" :model="form_search" class="demo-form-inline">

            <el-form-item label="股票代码">
                <el-input v-model="form_search.symbol" placeholder="股票代码"></el-input>
            </el-form-item>

            <el-form-item label="股票名称">
                <el-input v-model="form_search.name" placeholder="股票名称"></el-input>
            </el-form-item>

            <el-form-item label="所属行业">
                <el-select v-model="form_search.industry" placeholder="所属行业">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>

        </el-form>

        <TablePagination :options="options" ></TablePagination>
    </div>
</template>

<style>

</style>

<script>

    import TablePagination from './../../../components/common/TablePagination'

    export default {
        data() {
            return {
                form_search:{
                    symbol:'',
                    name:'',
                },
                options:{
                    url: 'http://vm.centos.xmissy_stock_plan_api/pro/stock/list',
                    columns: [
                        {
                            field:'symbol',
                            title:'股票代码'
                        },
                        {
                            field:'name',
                            title:'股票名称'
                        },
                        {
                            field:'industry',
                            title:'所属行业'
                        }
                    ]
                },
            }
        },
        components: {
            TablePagination
        },
        methods:{
            onSubmit(){

            }
        }
    };
</script>

<template>
  <div>
    <bu-table :headerTopfixed="false" apiUrl="/packages/components/BuTable/src/mock.json" :isPaging="false">
      <el-table-column label="创建时间" prop="CreatedAt"></el-table-column>
      <el-table-column label="更新时间" prop="UpdatedAt"></el-table-column>
      <el-table-column label="name" prop="name"></el-table-column>
      <el-table-column label="tagsType" prop="tagsType"></el-table-column>
    </bu-table>
  </div>
</template>
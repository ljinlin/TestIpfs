<template>

  <div>
    <h3>铸造 nft (ERC1155)</h3>

    <el-form ref="form" :model="ryfObj" label-width="100px">
      <el-form-item label="接收nft账户">
        <el-input v-model="nftAccount" :maxlength="100"></el-input>
      </el-form-item>
      <el-form-item label="nft名称">
        <el-input v-model="ryfObj.name" :maxlength="20"></el-input>
      </el-form-item>
      <el-form-item label="拷贝数量">
        <el-input-number v-model="ryfObj.num" :min="1" :max="10"></el-input-number>
      </el-form-item>
      <el-form-item>

        <el-upload class="upload-demo" ref="upload" action="http://localhost:8080/ryf/test1155/uploadToIpfs"
          :file-list="fileList" :auto-upload="false" :data="ryfObj" :on-success="uploadSuccess">
          <el-button slot="trigger" size="small" type="primary">选择图片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过1MB</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="uploadToIpfs">mint</el-button>
      </el-form-item>
    </el-form>
    <hr/>
    <h3>转账</h3>
    
    <el-form ref="transFerForm" :model="transObj" label-width="80px">
      <el-form-item label="转出账户">
        <el-input v-model="transObj.from" :maxlength="100"></el-input>
      </el-form-item>
      <el-form-item label="接受账户">
        <el-input v-model="transObj.to" :maxlength="100"></el-input>
      </el-form-item>
      <el-form-item label="nft编号">
        <el-input-number v-model="transObj.id" :min="1" :max="100000000"></el-input-number>
      </el-form-item>
      <el-form-item label="转nft数量">
        <el-input-number v-model="transObj.num" :min="1" :max="10"></el-input-number>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="safeTransferFrom">转帐</el-button>
      </el-form-item>
    </el-form>
    <hr/>
    <h3>铸造记录</h3>
    <template>
      <el-table :data="nftList" style="width: 100%">
        <el-table-column prop="nftNo" label="nft 编号" width="180">
        </el-table-column>
        <el-table-column prop="name" label="nft 名称" width="180">
        </el-table-column>
        <el-table-column prop="num" label="nft 数量" width="80">
        </el-table-column>
        <el-table-column prop="image" label="nft 图片">
          <template slot-scope="scope">
            <div class="block">
              <el-image style="width: 60px; height: 60px"
              :src="'http://localhost:8080/ryf/test1155/downloadImgFromIpfs?imgURI=' + scope.row.image"
              :fit="scope.row.image"></el-image>
              <span class="demonstration">{{ scope.row.image }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="tokenURI" label="tokenURI">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
  
<script>


import axios from "axios";
import erc1155abi from "../lib/testerc1155.abi.js"

var thiz = null;
var gasPrice = null;
var contractAddr = "0x02459f4D88781c25921413E12d15E89f8F0ee05B";
export default {
  components: {

  },
  data() {
    return {
      nftAccount: "",
      ryfObj: { 'name': "", 'num': 1 },
      transObj:{'from':"","to":"","num":0,"id":1},
      fileList: [],
      nftNum: 1,
      nftList: [],
      nftMap: {}
    };
  },
  created() {
    thiz = this;
  },
  mounted() {
    connectWallt(async (acco) => {
      // gasPrice = await window.web3.eth.getGasPrice(); // 获取gas费
      // debugger
      window.contract = new web3.eth.Contract(erc1155abi, contractAddr, {
        'from': acco,
        'gasPrice': 7000000
      });
      this.nftAccount = acco
      this.transObj.from = acco
      this.selectNftList();
    });
  },
  methods: {
    async selectNftList() {
      let batch = [];
      this.nftNum=this.nftList.length+1
      let i = 1;
      while (i++ < 10) {
        batch.push(this.nftNum++)
      }
      contract.methods.uriBatch(batch).call().then(tokenURIS => {
        if (tokenURIS && tokenURIS.length) {
          axios.post('http://localhost:8080/ryf/test1155/downloadFromIpfs', tokenURIS).then(jsonRes => {
            if (jsonRes && jsonRes.data && jsonRes.data.length) {
              for (let i = 0; i < jsonRes.data.length; i++) {
                jsonRes.data[i].nftNo = batch[i]
                jsonRes.data[i].tokenURI = tokenURIS[i]
                this.nftList.push(jsonRes.data[i]);
              }
            }
          })
        }
        setTimeout(()=>{
          this.selectNftList()
        },30000)
      });
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt1M) {
        this.$message.error('上传头像图片大小不能超过 1MB!');
      }
      return isJPG && isLt1M;
    },
    uploadToIpfs() {
      this.$refs.upload.submit();
    },
    async safeTransferFrom() {
      let sender = await contract.methods.safeTransferFrom(this.transObj.from, this.transObj.to,this.transObj.id,this.transObj.num, "0x00");
      sender.send().then(data => {
        alert("转账完成");
      });
    },
    async uploadSuccess(res) {
      if (res.msg) {
        alert(res.msg);
        return;
      }
      let minter = await contract.methods.mint(this.nftAccount, this.ryfObj.num, res.tokenURI);
      minter.send().then(data => {
        alert("铸造完成");
      });
    }
  },

};
</script>
  
<style lang="scss" scoped>

</style>
  
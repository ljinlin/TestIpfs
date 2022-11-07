package com.test.ipfs;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import io.ipfs.api.IPFS;
import io.ipfs.api.MerkleNode;
import io.ipfs.api.NamedStreamable;
import io.ipfs.multihash.Multihash;

@Component
public class IPFSUtil {
 
    public String upload(IPFS ipfs, String fileName) throws IOException {
        NamedStreamable.FileWrapper file = new NamedStreamable.FileWrapper(new File(fileName));
        MerkleNode addResult = ipfs.add(file).get(0);
        return addResult.hash.toString();
    }
 
    public String upload(IPFS ipfs, byte[] data) throws IOException {
        NamedStreamable.ByteArrayWrapper file = new NamedStreamable.ByteArrayWrapper(data);
        MerkleNode addResult = ipfs.add(file).get(0);
        return addResult.hash.toString();
    }
 
    public byte[] download(IPFS ipfs, String hash) {
        byte[] data = null;
        try {
            data = ipfs.cat(Multihash.fromBase58(hash));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return data;
    }
 
    public void download(IPFS ipfs, String hash, String destFile) {
        byte[] data = null;
        try {
            data = ipfs.cat(Multihash.fromBase58(hash));
        } catch (IOException e) {
            e.printStackTrace();
        }
        if (data != null && data.length > 0) {
            File file = new File(destFile);
            if (file.exists()) {
                file.delete();
            }
            FileOutputStream fos = null;
            try {
                fos = new FileOutputStream(file);
                fos.write(data);
                fos.flush();
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                try {
                    fos.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
 
            }
        }
    }
    
 
 
 
    public void testIPFSDownload() throws IOException {
        String cid = "BmxJxgEUoQ7avSXC7BbazTCSqMmySBrIPmSX7ipWCBcLVN1";
        String destFile = "D:\\irving.jpg";
 
 
    }
    
    public static void main(String[] args) throws IOException {
    	IPFSUtil util=new IPFSUtil();
    	IPFS ipfs = new IPFS("/ip4/183.252.17.149/tcp/5001");
    	String id=util.upload(ipfs, "D:\\files\\1662351807135.jpg");
    	util.download(ipfs,id, "D:\\files\\1662351807135-2.jpg");
    	System.out.println("测试ipfs完成,id:"+id);
	}
}
 

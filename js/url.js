function ceshi(){
	alert("这是一个测试");
}


// function jm1(){	
// 	var aseKey = "12345678"     //秘钥必须为：8/16/32位
//         var message = "http://[2409:8a48:2442:6fe1:9cc5:ba1a:9dfa:da00]/";
//         //加密
//         encrypt = CryptoJS.AES.encrypt(message, CryptoJS.enc.Utf8.parse(aseKey), {
//                 mode: CryptoJS.mode.ECB,
//                 padding: CryptoJS.pad.Pkcs7
//         }).toString();
//         //console.log(encrypt);    //VKrZlqykem73x8/T2oCfCQ==
// 	alert(encrypt);
// }

function jm2(aseKey){
	//解密
        var decrypt = CryptoJS.AES.decrypt(encrypt, CryptoJS.enc.Utf8.parse(aseKey), {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);
        //console.log(decrypt);    //80018000142
	alert(decrypt);
}

function shuru(){
	var aseKey=prompt("暗号:","");
	jm2(aseKey);

}
	
	
	
	


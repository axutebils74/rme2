!(function () {
    var BLAKE2s=function(){function t(t){var i=Object.prototype.toString.call(t);return"[object Uint8Array]"===i||"[object Array]"===i}function i(t,i){return 255&t[i+0]|(255&t[i+1])<<8|(255&t[i+2])<<16|(255&t[i+3])<<24}function s(s,f){if(void 0===s&&(s=r),s<=0||s>r)throw new Error("bad digestLength");this.digestLength=s;var u,c,p,y=0;if(t(f))y=(u=f).length;else if("object"==typeof f)!function(i){for(var s in i)switch(s){case"key":case"personalization":case"salt":if(!t(i[s]))throw new TypeError(s+" must be a Uint8Array or an Array of bytes");break;default:throw new Error("unexpected key in config: "+s)}}(f),y=(u=f.key)?u.length:0,p=f.salt,c=f.personalization;else if(f)throw new Error("unexpected key or config type");if(y>e)throw new Error("key is too long");if(p&&p.length!==o)throw new Error("salt must be "+o+" bytes");if(c&&c.length!==n)throw new Error("personalization must be "+n+" bytes");this.isFinished=!1,this.h=new Uint32Array(a);var l=new Uint8Array([255&s,y,1,1]);if(this.h[0]^=i(l,0),p&&(this.h[4]^=i(p,0),this.h[5]^=i(p,4)),c&&(this.h[6]^=i(c,0),this.h[7]^=i(c,4)),this.x=new Uint8Array(h),this.nx=0,this.t0=0,this.t1=0,this.f0=0,this.f1=0,y>0){for(var g=0;g<y;g++)this.x[g]=u[g];for(g=y;g<h;g++)this.x[g]=0;this.nx=h}}var r=32,h=64,e=32,n=8,o=8,a=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);return s.prototype.processBlock=function(t){this.t0+=t,this.t0!=this.t0>>>0&&(this.t0=0,this.t1++);var i=this.h[0],s=this.h[1],r=this.h[2],h=this.h[3],e=this.h[4],n=this.h[5],o=this.h[6],f=this.h[7],u=a[0],c=a[1],p=a[2],y=a[3],l=a[4]^this.t0,g=a[5]^this.t1,d=a[6]^this.f0,w=a[7]^this.f1,x=this.x,b=255&x[0]|(255&x[1])<<8|(255&x[2])<<16|(255&x[3])<<24,v=255&x[4]|(255&x[5])<<8|(255&x[6])<<16|(255&x[7])<<24,A=255&x[8]|(255&x[9])<<8|(255&x[10])<<16|(255&x[11])<<24,k=255&x[12]|(255&x[13])<<8|(255&x[14])<<16|(255&x[15])<<24,E=255&x[16]|(255&x[17])<<8|(255&x[18])<<16|(255&x[19])<<24,L=255&x[20]|(255&x[21])<<8|(255&x[22])<<16|(255&x[23])<<24,U=255&x[24]|(255&x[25])<<8|(255&x[26])<<16|(255&x[27])<<24,m=255&x[28]|(255&x[29])<<8|(255&x[30])<<16|(255&x[31])<<24,B=255&x[32]|(255&x[33])<<8|(255&x[34])<<16|(255&x[35])<<24,j=255&x[36]|(255&x[37])<<8|(255&x[38])<<16|(255&x[39])<<24,z=255&x[40]|(255&x[41])<<8|(255&x[42])<<16|(255&x[43])<<24,F=255&x[44]|(255&x[45])<<8|(255&x[46])<<16|(255&x[47])<<24,K=255&x[48]|(255&x[49])<<8|(255&x[50])<<16|(255&x[51])<<24,T=255&x[52]|(255&x[53])<<8|(255&x[54])<<16|(255&x[55])<<24,D=255&x[56]|(255&x[57])<<8|(255&x[58])<<16|(255&x[59])<<24,O=255&x[60]|(255&x[61])<<8|(255&x[62])<<16|(255&x[63])<<24;e=(e^=u=u+(l=(l^=i=(i=i+b|0)+e|0)<<16|l>>>16)|0)<<20|e>>>12,n=(n^=c=c+(g=(g^=s=(s=s+A|0)+n|0)<<16|g>>>16)|0)<<20|n>>>12,o=(o^=p=p+(d=(d^=r=(r=r+E|0)+o|0)<<16|d>>>16)|0)<<20|o>>>12,f=(f^=y=y+(w=(w^=h=(h=h+U|0)+f|0)<<16|w>>>16)|0)<<20|f>>>12,o=(o^=p=p+(d=(d^=r=(r=r+L|0)+o|0)<<24|d>>>8)|0)<<25|o>>>7,f=(f^=y=y+(w=(w^=h=(h=h+m|0)+f|0)<<24|w>>>8)|0)<<25|f>>>7,n=(n^=c=c+(g=(g^=s=(s=s+k|0)+n|0)<<24|g>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+v|0)+e|0)<<24|l>>>8)|0)<<25|e>>>7,n=(n^=p=p+(w=(w^=i=(i=i+B|0)+n|0)<<16|w>>>16)|0)<<20|n>>>12,o=(o^=y=y+(l=(l^=s=(s=s+z|0)+o|0)<<16|l>>>16)|0)<<20|o>>>12,f=(f^=u=u+(g=(g^=r=(r=r+K|0)+f|0)<<16|g>>>16)|0)<<20|f>>>12,e=(e^=c=c+(d=(d^=h=(h=h+D|0)+e|0)<<16|d>>>16)|0)<<20|e>>>12,f=(f^=u=u+(g=(g^=r=(r=r+T|0)+f|0)<<24|g>>>8)|0)<<25|f>>>7,e=(e^=c=c+(d=(d^=h=(h=h+O|0)+e|0)<<24|d>>>8)|0)<<25|e>>>7,o=(o^=y=y+(l=(l^=s=(s=s+F|0)+o|0)<<24|l>>>8)|0)<<25|o>>>7,n=(n^=p=p+(w=(w^=i=(i=i+j|0)+n|0)<<24|w>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+D|0)+e|0)<<16|l>>>16)|0)<<20|e>>>12,n=(n^=c=c+(g=(g^=s=(s=s+E|0)+n|0)<<16|g>>>16)|0)<<20|n>>>12,o=(o^=p=p+(d=(d^=r=(r=r+j|0)+o|0)<<16|d>>>16)|0)<<20|o>>>12,f=(f^=y=y+(w=(w^=h=(h=h+T|0)+f|0)<<16|w>>>16)|0)<<20|f>>>12,o=(o^=p=p+(d=(d^=r=(r=r+O|0)+o|0)<<24|d>>>8)|0)<<25|o>>>7,f=(f^=y=y+(w=(w^=h=(h=h+U|0)+f|0)<<24|w>>>8)|0)<<25|f>>>7,n=(n^=c=c+(g=(g^=s=(s=s+B|0)+n|0)<<24|g>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+z|0)+e|0)<<24|l>>>8)|0)<<25|e>>>7,n=(n^=p=p+(w=(w^=i=(i=i+v|0)+n|0)<<16|w>>>16)|0)<<20|n>>>12,o=(o^=y=y+(l=(l^=s=(s=s+b|0)+o|0)<<16|l>>>16)|0)<<20|o>>>12,f=(f^=u=u+(g=(g^=r=(r=r+F|0)+f|0)<<16|g>>>16)|0)<<20|f>>>12,e=(e^=c=c+(d=(d^=h=(h=h+L|0)+e|0)<<16|d>>>16)|0)<<20|e>>>12,f=(f^=u=u+(g=(g^=r=(r=r+m|0)+f|0)<<24|g>>>8)|0)<<25|f>>>7,e=(e^=c=c+(d=(d^=h=(h=h+k|0)+e|0)<<24|d>>>8)|0)<<25|e>>>7,o=(o^=y=y+(l=(l^=s=(s=s+A|0)+o|0)<<24|l>>>8)|0)<<25|o>>>7,n=(n^=p=p+(w=(w^=i=(i=i+K|0)+n|0)<<24|w>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+F|0)+e|0)<<16|l>>>16)|0)<<20|e>>>12,n=(n^=c=c+(g=(g^=s=(s=s+K|0)+n|0)<<16|g>>>16)|0)<<20|n>>>12,o=(o^=p=p+(d=(d^=r=(r=r+L|0)+o|0)<<16|d>>>16)|0)<<20|o>>>12,f=(f^=y=y+(w=(w^=h=(h=h+O|0)+f|0)<<16|w>>>16)|0)<<20|f>>>12,o=(o^=p=p+(d=(d^=r=(r=r+A|0)+o|0)<<24|d>>>8)|0)<<25|o>>>7,f=(f^=y=y+(w=(w^=h=(h=h+T|0)+f|0)<<24|w>>>8)|0)<<25|f>>>7,n=(n^=c=c+(g=(g^=s=(s=s+b|0)+n|0)<<24|g>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+B|0)+e|0)<<24|l>>>8)|0)<<25|e>>>7,n=(n^=p=p+(w=(w^=i=(i=i+z|0)+n|0)<<16|w>>>16)|0)<<20|n>>>12,o=(o^=y=y+(l=(l^=s=(s=s+k|0)+o|0)<<16|l>>>16)|0)<<20|o>>>12,f=(f^=u=u+(g=(g^=r=(r=r+m|0)+f|0)<<16|g>>>16)|0)<<20|f>>>12,e=(e^=c=c+(d=(d^=h=(h=h+j|0)+e|0)<<16|d>>>16)|0)<<20|e>>>12,f=(f^=u=u+(g=(g^=r=(r=r+v|0)+f|0)<<24|g>>>8)|0)<<25|f>>>7,e=(e^=c=c+(d=(d^=h=(h=h+E|0)+e|0)<<24|d>>>8)|0)<<25|e>>>7,o=(o^=y=y+(l=(l^=s=(s=s+U|0)+o|0)<<24|l>>>8)|0)<<25|o>>>7,n=(n^=p=p+(w=(w^=i=(i=i+D|0)+n|0)<<24|w>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+m|0)+e|0)<<16|l>>>16)|0)<<20|e>>>12,n=(n^=c=c+(g=(g^=s=(s=s+k|0)+n|0)<<16|g>>>16)|0)<<20|n>>>12,o=(o^=p=p+(d=(d^=r=(r=r+T|0)+o|0)<<16|d>>>16)|0)<<20|o>>>12,f=(f^=y=y+(w=(w^=h=(h=h+F|0)+f|0)<<16|w>>>16)|0)<<20|f>>>12,o=(o^=p=p+(d=(d^=r=(r=r+K|0)+o|0)<<24|d>>>8)|0)<<25|o>>>7,f=(f^=y=y+(w=(w^=h=(h=h+D|0)+f|0)<<24|w>>>8)|0)<<25|f>>>7,n=(n^=c=c+(g=(g^=s=(s=s+v|0)+n|0)<<24|g>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+j|0)+e|0)<<24|l>>>8)|0)<<25|e>>>7,n=(n^=p=p+(w=(w^=i=(i=i+A|0)+n|0)<<16|w>>>16)|0)<<20|n>>>12,o=(o^=y=y+(l=(l^=s=(s=s+L|0)+o|0)<<16|l>>>16)|0)<<20|o>>>12,f=(f^=u=u+(g=(g^=r=(r=r+E|0)+f|0)<<16|g>>>16)|0)<<20|f>>>12,e=(e^=c=c+(d=(d^=h=(h=h+O|0)+e|0)<<16|d>>>16)|0)<<20|e>>>12,f=(f^=u=u+(g=(g^=r=(r=r+b|0)+f|0)<<24|g>>>8)|0)<<25|f>>>7,e=(e^=c=c+(d=(d^=h=(h=h+B|0)+e|0)<<24|d>>>8)|0)<<25|e>>>7,o=(o^=y=y+(l=(l^=s=(s=s+z|0)+o|0)<<24|l>>>8)|0)<<25|o>>>7,n=(n^=p=p+(w=(w^=i=(i=i+U|0)+n|0)<<24|w>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+j|0)+e|0)<<16|l>>>16)|0)<<20|e>>>12,n=(n^=c=c+(g=(g^=s=(s=s+L|0)+n|0)<<16|g>>>16)|0)<<20|n>>>12,o=(o^=p=p+(d=(d^=r=(r=r+A|0)+o|0)<<16|d>>>16)|0)<<20|o>>>12,f=(f^=y=y+(w=(w^=h=(h=h+z|0)+f|0)<<16|w>>>16)|0)<<20|f>>>12,o=(o^=p=p+(d=(d^=r=(r=r+E|0)+o|0)<<24|d>>>8)|0)<<25|o>>>7,f=(f^=y=y+(w=(w^=h=(h=h+O|0)+f|0)<<24|w>>>8)|0)<<25|f>>>7,n=(n^=c=c+(g=(g^=s=(s=s+m|0)+n|0)<<24|g>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+b|0)+e|0)<<24|l>>>8)|0)<<25|e>>>7,n=(n^=p=p+(w=(w^=i=(i=i+D|0)+n|0)<<16|w>>>16)|0)<<20|n>>>12,o=(o^=y=y+(l=(l^=s=(s=s+F|0)+o|0)<<16|l>>>16)|0)<<20|o>>>12,f=(f^=u=u+(g=(g^=r=(r=r+U|0)+f|0)<<16|g>>>16)|0)<<20|f>>>12,e=(e^=c=c+(d=(d^=h=(h=h+k|0)+e|0)<<16|d>>>16)|0)<<20|e>>>12,f=(f^=u=u+(g=(g^=r=(r=r+B|0)+f|0)<<24|g>>>8)|0)<<25|f>>>7,e=(e^=c=c+(d=(d^=h=(h=h+T|0)+e|0)<<24|d>>>8)|0)<<25|e>>>7,o=(o^=y=y+(l=(l^=s=(s=s+K|0)+o|0)<<24|l>>>8)|0)<<25|o>>>7,n=(n^=p=p+(w=(w^=i=(i=i+v|0)+n|0)<<24|w>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+A|0)+e|0)<<16|l>>>16)|0)<<20|e>>>12,n=(n^=c=c+(g=(g^=s=(s=s+U|0)+n|0)<<16|g>>>16)|0)<<20|n>>>12,o=(o^=p=p+(d=(d^=r=(r=r+b|0)+o|0)<<16|d>>>16)|0)<<20|o>>>12,f=(f^=y=y+(w=(w^=h=(h=h+B|0)+f|0)<<16|w>>>16)|0)<<20|f>>>12,o=(o^=p=p+(d=(d^=r=(r=r+F|0)+o|0)<<24|d>>>8)|0)<<25|o>>>7,f=(f^=y=y+(w=(w^=h=(h=h+k|0)+f|0)<<24|w>>>8)|0)<<25|f>>>7,n=(n^=c=c+(g=(g^=s=(s=s+z|0)+n|0)<<24|g>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+K|0)+e|0)<<24|l>>>8)|0)<<25|e>>>7,n=(n^=p=p+(w=(w^=i=(i=i+E|0)+n|0)<<16|w>>>16)|0)<<20|n>>>12,o=(o^=y=y+(l=(l^=s=(s=s+m|0)+o|0)<<16|l>>>16)|0)<<20|o>>>12,f=(f^=u=u+(g=(g^=r=(r=r+O|0)+f|0)<<16|g>>>16)|0)<<20|f>>>12,e=(e^=c=c+(d=(d^=h=(h=h+v|0)+e|0)<<16|d>>>16)|0)<<20|e>>>12,f=(f^=u=u+(g=(g^=r=(r=r+D|0)+f|0)<<24|g>>>8)|0)<<25|f>>>7,e=(e^=c=c+(d=(d^=h=(h=h+j|0)+e|0)<<24|d>>>8)|0)<<25|e>>>7,o=(o^=y=y+(l=(l^=s=(s=s+L|0)+o|0)<<24|l>>>8)|0)<<25|o>>>7,n=(n^=p=p+(w=(w^=i=(i=i+T|0)+n|0)<<24|w>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+K|0)+e|0)<<16|l>>>16)|0)<<20|e>>>12,n=(n^=c=c+(g=(g^=s=(s=s+v|0)+n|0)<<16|g>>>16)|0)<<20|n>>>12,o=(o^=p=p+(d=(d^=r=(r=r+D|0)+o|0)<<16|d>>>16)|0)<<20|o>>>12,f=(f^=y=y+(w=(w^=h=(h=h+E|0)+f|0)<<16|w>>>16)|0)<<20|f>>>12,o=(o^=p=p+(d=(d^=r=(r=r+T|0)+o|0)<<24|d>>>8)|0)<<25|o>>>7,f=(f^=y=y+(w=(w^=h=(h=h+z|0)+f|0)<<24|w>>>8)|0)<<25|f>>>7,n=(n^=c=c+(g=(g^=s=(s=s+O|0)+n|0)<<24|g>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+L|0)+e|0)<<24|l>>>8)|0)<<25|e>>>7,n=(n^=p=p+(w=(w^=i=(i=i+b|0)+n|0)<<16|w>>>16)|0)<<20|n>>>12,o=(o^=y=y+(l=(l^=s=(s=s+U|0)+o|0)<<16|l>>>16)|0)<<20|o>>>12,f=(f^=u=u+(g=(g^=r=(r=r+j|0)+f|0)<<16|g>>>16)|0)<<20|f>>>12,e=(e^=c=c+(d=(d^=h=(h=h+B|0)+e|0)<<16|d>>>16)|0)<<20|e>>>12,f=(f^=u=u+(g=(g^=r=(r=r+A|0)+f|0)<<24|g>>>8)|0)<<25|f>>>7,e=(e^=c=c+(d=(d^=h=(h=h+F|0)+e|0)<<24|d>>>8)|0)<<25|e>>>7,o=(o^=y=y+(l=(l^=s=(s=s+k|0)+o|0)<<24|l>>>8)|0)<<25|o>>>7,n=(n^=p=p+(w=(w^=i=(i=i+m|0)+n|0)<<24|w>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+T|0)+e|0)<<16|l>>>16)|0)<<20|e>>>12,n=(n^=c=c+(g=(g^=s=(s=s+m|0)+n|0)<<16|g>>>16)|0)<<20|n>>>12,o=(o^=p=p+(d=(d^=r=(r=r+K|0)+o|0)<<16|d>>>16)|0)<<20|o>>>12,f=(f^=y=y+(w=(w^=h=(h=h+k|0)+f|0)<<16|w>>>16)|0)<<20|f>>>12,o=(o^=p=p+(d=(d^=r=(r=r+v|0)+o|0)<<24|d>>>8)|0)<<25|o>>>7,f=(f^=y=y+(w=(w^=h=(h=h+j|0)+f|0)<<24|w>>>8)|0)<<25|f>>>7,n=(n^=c=c+(g=(g^=s=(s=s+D|0)+n|0)<<24|g>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+F|0)+e|0)<<24|l>>>8)|0)<<25|e>>>7,n=(n^=p=p+(w=(w^=i=(i=i+L|0)+n|0)<<16|w>>>16)|0)<<20|n>>>12,o=(o^=y=y+(l=(l^=s=(s=s+O|0)+o|0)<<16|l>>>16)|0)<<20|o>>>12,f=(f^=u=u+(g=(g^=r=(r=r+B|0)+f|0)<<16|g>>>16)|0)<<20|f>>>12,e=(e^=c=c+(d=(d^=h=(h=h+A|0)+e|0)<<16|d>>>16)|0)<<20|e>>>12,f=(f^=u=u+(g=(g^=r=(r=r+U|0)+f|0)<<24|g>>>8)|0)<<25|f>>>7,e=(e^=c=c+(d=(d^=h=(h=h+z|0)+e|0)<<24|d>>>8)|0)<<25|e>>>7,o=(o^=y=y+(l=(l^=s=(s=s+E|0)+o|0)<<24|l>>>8)|0)<<25|o>>>7,n=(n^=p=p+(w=(w^=i=(i=i+b|0)+n|0)<<24|w>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+U|0)+e|0)<<16|l>>>16)|0)<<20|e>>>12,n=(n^=c=c+(g=(g^=s=(s=s+D|0)+n|0)<<16|g>>>16)|0)<<20|n>>>12,o=(o^=p=p+(d=(d^=r=(r=r+F|0)+o|0)<<16|d>>>16)|0)<<20|o>>>12,f=(f^=y=y+(w=(w^=h=(h=h+b|0)+f|0)<<16|w>>>16)|0)<<20|f>>>12,o=(o^=p=p+(d=(d^=r=(r=r+k|0)+o|0)<<24|d>>>8)|0)<<25|o>>>7,f=(f^=y=y+(w=(w^=h=(h=h+B|0)+f|0)<<24|w>>>8)|0)<<25|f>>>7,n=(n^=c=c+(g=(g^=s=(s=s+j|0)+n|0)<<24|g>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+O|0)+e|0)<<24|l>>>8)|0)<<25|e>>>7,n=(n^=p=p+(w=(w^=i=(i=i+K|0)+n|0)<<16|w>>>16)|0)<<20|n>>>12,o=(o^=y=y+(l=(l^=s=(s=s+T|0)+o|0)<<16|l>>>16)|0)<<20|o>>>12,f=(f^=u=u+(g=(g^=r=(r=r+v|0)+f|0)<<16|g>>>16)|0)<<20|f>>>12,e=(e^=c=c+(d=(d^=h=(h=h+z|0)+e|0)<<16|d>>>16)|0)<<20|e>>>12,f=(f^=u=u+(g=(g^=r=(r=r+E|0)+f|0)<<24|g>>>8)|0)<<25|f>>>7,e=(e^=c=c+(d=(d^=h=(h=h+L|0)+e|0)<<24|d>>>8)|0)<<25|e>>>7,o=(o^=y=y+(l=(l^=s=(s=s+m|0)+o|0)<<24|l>>>8)|0)<<25|o>>>7,n=(n^=p=p+(w=(w^=i=(i=i+A|0)+n|0)<<24|w>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+z|0)+e|0)<<16|l>>>16)|0)<<20|e>>>12,n=(n^=c=c+(g=(g^=s=(s=s+B|0)+n|0)<<16|g>>>16)|0)<<20|n>>>12,o=(o^=p=p+(d=(d^=r=(r=r+m|0)+o|0)<<16|d>>>16)|0)<<20|o>>>12,f=(f^=y=y+(w=(w^=h=(h=h+v|0)+f|0)<<16|w>>>16)|0)<<20|f>>>12,o=(o^=p=p+(d=(d^=r=(r=r+U|0)+o|0)<<24|d>>>8)|0)<<25|o>>>7,f=(f^=y=y+(w=(w^=h=(h=h+L|0)+f|0)<<24|w>>>8)|0)<<25|f>>>7,n=(n^=c=c+(g=(g^=s=(s=s+E|0)+n|0)<<24|g>>>8)|0)<<25|n>>>7,e=(e^=u=u+(l=(l^=i=(i=i+A|0)+e|0)<<24|l>>>8)|0)<<25|e>>>7,n=(n^=p=p+(w=(w^=i=(i=i+O|0)+n|0)<<16|w>>>16)|0)<<20|n>>>12,o=(o^=y=y+(l=(l^=s=(s=s+j|0)+o|0)<<16|l>>>16)|0)<<20|o>>>12,f=(f^=u=u+(g=(g^=r=(r=r+k|0)+f|0)<<16|g>>>16)|0)<<20|f>>>12,e=(e^=c=c+(d=(d^=h=(h=h+T|0)+e|0)<<16|d>>>16)|0)<<20|e>>>12,f=(f^=u=u+(g=(g^=r=(r=r+K|0)+f|0)<<24|g>>>8)|0)<<25|f>>>7,e=(e^=c=c+(d=(d^=h=(h=h+b|0)+e|0)<<24|d>>>8)|0)<<25|e>>>7,o=(o^=y=y+(l=(l^=s=(s=s+D|0)+o|0)<<24|l>>>8)|0)<<25|o>>>7,n=(n^=p=p+(w=(w^=i=(i=i+F|0)+n|0)<<24|w>>>8)|0)<<25|n>>>7,this.h[0]^=i^u,this.h[1]^=s^c,this.h[2]^=r^p,this.h[3]^=h^y,this.h[4]^=e^l,this.h[5]^=n^g,this.h[6]^=o^d,this.h[7]^=f^w},s.prototype.update=function(t,i,s){if("string"==typeof t)throw new TypeError("update() accepts Uint8Array or an Array of bytes");if(this.isFinished)throw new Error("update() after calling digest()");if(void 0===i&&(i=0),void 0===s&&(s=t.length-i),0===s)return this;var r,h=64-this.nx;if(s>h){for(r=0;r<h;r++)this.x[this.nx+r]=t[i+r];this.processBlock(64),i+=h,s-=h,this.nx=0}for(;s>64;){for(r=0;r<64;r++)this.x[r]=t[i+r];this.processBlock(64),i+=64,s-=64,this.nx=0}for(r=0;r<s;r++)this.x[this.nx+r]=t[i+r];return this.nx+=s,this},s.prototype.digest=function(){var t;if(this.isFinished)return this.result;for(t=this.nx;t<64;t++)this.x[t]=0;this.f0=4294967295,this.processBlock(this.nx);var i=new Uint8Array(32);for(t=0;t<8;t++){var s=this.h[t];i[4*t+0]=s>>>0&255,i[4*t+1]=s>>>8&255,i[4*t+2]=s>>>16&255,i[4*t+3]=s>>>24&255}return this.result=new Uint8Array(i.subarray(0,this.digestLength)),this.isFinished=!0,this.result},s.prototype.hexDigest=function(){for(var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],i=[],s=this.digest(),r=0;r<s.length;r++)i.push(t[s[r]>>4&15]),i.push(t[15&s[r]]);return i.join("")},s.digestLength=r,s.blockLength=h,s.keyLength=e,s.saltLength=o,s.personalizationLength=n,s}();
    var stream_xor = (function(){function A(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,w=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,A=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=i,d=h,E=a,x=f,M=s,m=u,B=c,S=y,k=l,K=w,Y=v,L=p,T=b,z=g,R=A,P=_,N=0;N<20;N+=2)U^=(o=(T^=(o=(k^=(o=(M^=(o=U+T|0)<<7|o>>>25)+U|0)<<9|o>>>23)+M|0)<<13|o>>>19)+k|0)<<18|o>>>14,m^=(o=(d^=(o=(z^=(o=(K^=(o=m+d|0)<<7|o>>>25)+m|0)<<9|o>>>23)+K|0)<<13|o>>>19)+z|0)<<18|o>>>14,Y^=(o=(B^=(o=(E^=(o=(R^=(o=Y+B|0)<<7|o>>>25)+Y|0)<<9|o>>>23)+R|0)<<13|o>>>19)+E|0)<<18|o>>>14,P^=(o=(L^=(o=(S^=(o=(x^=(o=P+L|0)<<7|o>>>25)+P|0)<<9|o>>>23)+x|0)<<13|o>>>19)+S|0)<<18|o>>>14,U^=(o=(x^=(o=(E^=(o=(d^=(o=U+x|0)<<7|o>>>25)+U|0)<<9|o>>>23)+d|0)<<13|o>>>19)+E|0)<<18|o>>>14,m^=(o=(M^=(o=(S^=(o=(B^=(o=m+M|0)<<7|o>>>25)+m|0)<<9|o>>>23)+B|0)<<13|o>>>19)+S|0)<<18|o>>>14,Y^=(o=(K^=(o=(k^=(o=(L^=(o=Y+K|0)<<7|o>>>25)+Y|0)<<9|o>>>23)+L|0)<<13|o>>>19)+k|0)<<18|o>>>14,P^=(o=(R^=(o=(z^=(o=(T^=(o=P+R|0)<<7|o>>>25)+P|0)<<9|o>>>23)+T|0)<<13|o>>>19)+z|0)<<18|o>>>14;U=U+i|0,d=d+h|0,E=E+a|0,x=x+f|0,M=M+s|0,m=m+u|0,B=B+c|0,S=S+y|0,k=k+l|0,K=K+w|0,Y=Y+v|0,L=L+p|0,T=T+b|0,z=z+g|0,R=R+A|0,P=P+_|0,r[0]=U>>>0&255,r[1]=U>>>8&255,r[2]=U>>>16&255,r[3]=U>>>24&255,r[4]=d>>>0&255,r[5]=d>>>8&255,r[6]=d>>>16&255,r[7]=d>>>24&255,r[8]=E>>>0&255,r[9]=E>>>8&255,r[10]=E>>>16&255,r[11]=E>>>24&255,r[12]=x>>>0&255,r[13]=x>>>8&255,r[14]=x>>>16&255,r[15]=x>>>24&255,r[16]=M>>>0&255,r[17]=M>>>8&255,r[18]=M>>>16&255,r[19]=M>>>24&255,r[20]=m>>>0&255,r[21]=m>>>8&255,r[22]=m>>>16&255,r[23]=m>>>24&255,r[24]=B>>>0&255,r[25]=B>>>8&255,r[26]=B>>>16&255,r[27]=B>>>24&255,r[28]=S>>>0&255,r[29]=S>>>8&255,r[30]=S>>>16&255,r[31]=S>>>24&255,r[32]=k>>>0&255,r[33]=k>>>8&255,r[34]=k>>>16&255,r[35]=k>>>24&255,r[36]=K>>>0&255,r[37]=K>>>8&255,r[38]=K>>>16&255,r[39]=K>>>24&255,r[40]=Y>>>0&255,r[41]=Y>>>8&255,r[42]=Y>>>16&255,r[43]=Y>>>24&255,r[44]=L>>>0&255,r[45]=L>>>8&255,r[46]=L>>>16&255,r[47]=L>>>24&255,r[48]=T>>>0&255,r[49]=T>>>8&255,r[50]=T>>>16&255,r[51]=T>>>24&255,r[52]=z>>>0&255,r[53]=z>>>8&255,r[54]=z>>>16&255,r[55]=z>>>24&255,r[56]=R>>>0&255,r[57]=R>>>8&255,r[58]=R>>>16&255,r[59]=R>>>24&255,r[60]=P>>>0&255,r[61]=P>>>8&255,r[62]=P>>>16&255,r[63]=P>>>24&255}(r,t,n,e)}function _(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,w=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,A=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=0;U<20;U+=2)i^=(o=(b^=(o=(l^=(o=(s^=(o=i+b|0)<<7|o>>>25)+i|0)<<9|o>>>23)+s|0)<<13|o>>>19)+l|0)<<18|o>>>14,u^=(o=(h^=(o=(g^=(o=(w^=(o=u+h|0)<<7|o>>>25)+u|0)<<9|o>>>23)+w|0)<<13|o>>>19)+g|0)<<18|o>>>14,v^=(o=(c^=(o=(a^=(o=(A^=(o=v+c|0)<<7|o>>>25)+v|0)<<9|o>>>23)+A|0)<<13|o>>>19)+a|0)<<18|o>>>14,_^=(o=(p^=(o=(y^=(o=(f^=(o=_+p|0)<<7|o>>>25)+_|0)<<9|o>>>23)+f|0)<<13|o>>>19)+y|0)<<18|o>>>14,i^=(o=(f^=(o=(a^=(o=(h^=(o=i+f|0)<<7|o>>>25)+i|0)<<9|o>>>23)+h|0)<<13|o>>>19)+a|0)<<18|o>>>14,u^=(o=(s^=(o=(y^=(o=(c^=(o=u+s|0)<<7|o>>>25)+u|0)<<9|o>>>23)+c|0)<<13|o>>>19)+y|0)<<18|o>>>14,v^=(o=(w^=(o=(l^=(o=(p^=(o=v+w|0)<<7|o>>>25)+v|0)<<9|o>>>23)+p|0)<<13|o>>>19)+l|0)<<18|o>>>14,_^=(o=(A^=(o=(g^=(o=(b^=(o=_+A|0)<<7|o>>>25)+_|0)<<9|o>>>23)+b|0)<<13|o>>>19)+g|0)<<18|o>>>14;r[0]=i>>>0&255,r[1]=i>>>8&255,r[2]=i>>>16&255,r[3]=i>>>24&255,r[4]=u>>>0&255,r[5]=u>>>8&255,r[6]=u>>>16&255,r[7]=u>>>24&255,r[8]=v>>>0&255,r[9]=v>>>8&255,r[10]=v>>>16&255,r[11]=v>>>24&255,r[12]=_>>>0&255,r[13]=_>>>8&255,r[14]=_>>>16&255,r[15]=_>>>24&255,r[16]=c>>>0&255,r[17]=c>>>8&255,r[18]=c>>>16&255,r[19]=c>>>24&255,r[20]=y>>>0&255,r[21]=y>>>8&255,r[22]=y>>>16&255,r[23]=y>>>24&255,r[24]=l>>>0&255,r[25]=l>>>8&255,r[26]=l>>>16&255,r[27]=l>>>24&255,r[28]=w>>>0&255,r[29]=w>>>8&255,r[30]=w>>>16&255,r[31]=w>>>24&255}(r,t,n,e)}var U=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function d(r,t,n,e,o,i,h){var a,f,s=new Uint8Array(16),u=new Uint8Array(64);for(f=0;f<16;f++)s[f]=0;for(f=0;f<8;f++)s[f]=i[f];for(;64<=o;){for(A(u,s,h,U),f=0;f<64;f++)r[t+f]=n[e+f]^u[f];for(a=1,f=8;f<16;f++)a=a+(255&s[f])|0,s[f]=255&a,a>>>=8;o-=64,t+=64,e+=64}if(0<o)for(A(u,s,h,U),f=0;f<o;f++)r[t+f]=n[e+f]^u[f];return 0}function M(r,t,n,e,o,i,h){var a=new Uint8Array(32);_(a,i,h,U);for(var f=new Uint8Array(8),s=0;s<8;s++)f[s]=i[s+16];return d(r,t,n,e,o,f,a)}return function(c,n,k){M(c,0,c,0,c.length,n,k);return c}})();
    function check(e) {
        return e && !/^(data|blob|ws|wss):/.test(e) && hashfilename(e).indexOf("http")
    }
    function decompress(a) {
        return a;
    }
    var toUint8Array = (function () {
        if (typeof TextEncoder === 'function') {
            return TextEncoder.prototype.encode.bind(new TextEncoder());
        } else {
            return function (s) {
                var i, d = unescape(encodeURIComponent(s)), b = new Uint8Array(d.length);
                for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
                return b;
            }
        }
    })()
    var _hash = $$hash;
    var hash = new Uint8Array(32);
    hash.set(_hash.match(/.{1,2}/g).map(function (b) { return parseInt(b, 16) }))
    var key = toUint8Array(prompt("Please enter the password"));
    var filerand = new BLAKE2s(16, { key: hash }).update(key).digest();
    var filename = new BLAKE2s(24, { key: hash }).update(key).digest();
    var hashkey = new BLAKE2s(32, { key: hash }).update(key).digest();
    XMLHttpRequest.prototype._open = XMLHttpRequest.prototype.open
    XMLHttpRequest.prototype._send = XMLHttpRequest.prototype.send
    var element = document.createElement('a');
    var cache = {};
    var scriptcache = {};
    function getURL(e) {
        element.href = e;
        return element.href
    }
    var base = getURL(".");
    function hashfilename(t) {
        var r = getURL(t).replace(base, "").toLowerCase().replace(/[#|?][^]*$/, "").replace(/%(?![a-z0-9]{2})/g, "%25");
        return decodeURIComponent(r);
    }
    function hexfile(t) {
        return "./data/" + new BLAKE2s(16, { key: filename }).update(toUint8Array(hashfilename(t))).hexDigest();
    }
    var latin1 = { 338: 188, 339: 189, 352: 166, 353: 168, 376: 190, 381: 180, 382: 184, 8364: 164 }
    function toU8Array(str) {
        var buf = new ArrayBuffer(str.length);
        var bufView = new Uint8Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            var octet = str.charCodeAt(i);
            if (latin1.hasOwnProperty(octet))
                octet = latin1[octet]
            bufView[i] = octet;
        }
        return bufView
    }
    function toURL(a) {
        return URL.createObjectURL(new Blob([a]));
    }
    function requestAsyc(t) {
        var xhr = new XMLHttpRequest()
        var o = hexfile(t);
        if (cache[o]) return cache[o];
        xhr._open("GET", o, false);
        xhr.overrideMimeType('text/plain; charset=ISO-8859-15');
        xhr._send()
        if (xhr.status < 200 || xhr.status >= 400) return "";
        var k = toU8Array(xhr.responseText);
        stream_xor(k, new BLAKE2s(24, { key: filerand }).update(toUint8Array(hashfilename(t))).digest(), hashkey);
        cache[o] = toURL(decompress(k))
        scriptcache[cache[o]] = t;
        return cache[o];
    }
    function tolink(a) {
        return a;
    }
    function request(t, fn, err) {
        var xhr = new XMLHttpRequest()
        var o = hexfile(t);
        if (cache[o]) return fn(cache[o]);
        xhr._open("GET", o);
        xhr.responseType = "arraybuffer";
        if (err) {
            xhr.ontimeout = function (e) { return err(0, e) }
            xhr.onabort = function (e) { return err(1, e) }
            xhr.onerror = function (e) { return err(2, e) }
        }
        xhr._send()
        xhr.onload = function () {
            if (xhr.status < 200 || xhr.status >= 400) return err && err();
            var k = new Uint8Array(xhr.response);
            stream_xor(k, new BLAKE2s(24, { key: filerand }).update(toUint8Array(hashfilename(t))).digest(), hashkey);
            var e = decompress(k);
            cache[o] = toURL(e)
            scriptcache[cache[o]] = t;
            fn(cache[o]);
        }
    }
    XMLHttpRequest.prototype.open = function (m, u, a) {
        if (u == "" || hashfilename(u) == "") u = "index.html"
        if (check(u) && m != "POST") {
            this._param = [m, u, a == false];
        } else {
            this._open.apply(this, arguments);
        }
    }
    XMLHttpRequest.prototype.send = function (msg) {
        var that = this;
        if (!this._param) {
            return this._send(msg);
        }
        var method = this._param[0];
        var url = this._param[1];
        var async = this._param[2];
        if (async) {
            this._open(method, tolink(requestAsyc(url)), false);
            this._send(msg);
        } else {
            request(url, function (e) {
                that._open(method, tolink(e));
                that._send(msg);
            }, function (e, a) {
                if (e == 0) { that.ontimeout && that.ontimeout(a) }
                if (e == 1) { that.onabort && that.onabort(a) }
                if (e == 2) { that.onerror && that.onerror(a) }
            })
        }
    }
    if (typeof fetch === 'function') {
        var _fetch = fetch;
        fetch = function (url, param) {
            if (typeof url === 'object') return _fetch(url);
            if (check(url)) {
                return new Promise(function (res, rej) {
                    var o = hexfile(url);
                    if (cache[o]) return res(_fetch(cache[o]));
                    _fetch(o).then(function (a) {
                        return a.arrayBuffer()
                    }).then(function (b) {
                        var k = new Uint8Array(b);
                        stream_xor(k, new BLAKE2s(24, { key: filerand }).update(toUint8Array(hashfilename(url))).digest(), hashkey);
                        cache[o] = toURL(decompress(k));
                        scriptcache[cache[o]] = url;
                        res(_fetch(cache[o]))
                    }).catch(function (e) {
                        rej(e);
                    })
                })
            } else {
                return _fetch(url, param);
            }
        }
    }
    function proxyResource(a) {
        var that = this;
        if (check(a)) {
            var o = hexfile(a)
            if (cache[o]) return that.setAttribute('src', cache[o]);
            request(a, function (e) {
                that.setAttribute('src', tolink(e));
            })
        } else {
            that.setAttribute('src', a);
        }

    }
    Object.defineProperties(Image.prototype, {
        src: {
            get: function () {
                return this.getAttribute('src') || ""
            },
            set: proxyResource
        }
    })
    Object.defineProperties(Audio.prototype, {
        src: {
            get: function () {
                return this.getAttribute('src') || ""
            },
            set: proxyResource
        }
    })
    Object.defineProperties(HTMLScriptElement.prototype, {
        src: {
            get: function () {
                var o = this.getAttribute('src')
                if (scriptcache[o]) return scriptcache[o]
                return o || ""
            }
        },
        _src: {
            get: function () {
                return this.getAttribute('src') || "";
            },
            set: function (a) {
                this.setAttribute('src', a);
            }
        }
    })
    var xml = new XMLHttpRequest();
    xml.open("GET", "index.html");
    xml.send();
    xml.onload = function () {
        var html = document.createElement('html');
        html.innerHTML = xml.responseText;
        var scripts = html.querySelectorAll('script');
        for (var i = 0; i < scripts.length; i++) {
            if (check(scripts[i]._src)) {
                scripts[i]._src = tolink(requestAsyc(scripts[i]._src));
            }
        }
        var img = html.querySelectorAll('img');
        for (var i = 0; i < img.length; i++) {
            if (check(img[i].src)) {
                img[i].setAttribute('src', tolink(requestAsyc(img[i].src)))
            }
        }
        var audio = html.querySelectorAll('audio');
        for (var i = 0; i < audio.length; i++) {
            if (check(audio[i].src)) {
                audio[i].setAttribute('src', tolink(requestAsyc(audio[i].src)))
            }
        }
        onerror = null;
        var __appendChild = Node.prototype.appendChild;
        Node.prototype.appendChild = function (e) {
            if (this === document.body && e && e.nodeName == 'SCRIPT' && check(e._src)) {
                if (e.async === false) {
                    e._src = tolink(requestAsyc(e._src));
                    __appendChild.call(this, e);
                } else {
                    request(e._src, function (k) {
                        e._src = tolink(k);
                        __appendChild.call(document.body, e);
                    }, function () {
                        __appendChild.call(document.body, e);
                    })
                }
                return e;
            } else {
                return __appendChild.call(this, e);
            }
        }
        document.open();
        document.write("<!DOCTYPE html>" + html.outerHTML);
        document.close();
    }
    xml.onerror = function(){throw new Error}
})();

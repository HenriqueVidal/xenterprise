
function imgreplace(imgid,URL){
    dstimage=document.getElementById(imgid);dstimage.src=URL;}

function imageloaded(img){
    try{
        if(typeof img.naturalWidth!="number"||img.naturalWidth<100){
            return false;}
    if(!img.complete)
    return false;}
    catch(e){return false;}
    return true;}

function refreshimages(){
    for(i=0;i<imageurls.length;i++){
        try{
            if(imageloaded(newimages[i])||c==0){
                console.log("Starting load image "+i);
                newimages[i]=new Image();
                var url=imageurls[i];
                var img=document.getElementById("image"+i);
                console.log(img);
                var tempurl;
                tempurl=url.replace("CHANNEL",ch.toString());
                tempurl=tempurl.replace("COUNTER",c.toString());
                newimages[i].src=tempurl;img.src=tempurl;}
            }
            catch(e){
                alert(e);a=0;}
    }
}

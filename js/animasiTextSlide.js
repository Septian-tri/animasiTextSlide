/**
 * Made In Indonesian
 * 
 * Original Writing Code and Algorithm design by Septian
 * 
 * Release Version V1.0 
 * Release Date 12-31-2022
 * 
 * septiantriwidian@gmail.com
 * 
 * https://github.com/Septian-tri/animasiTextSlide.git
 * 
 * 
 */

function animasiTextSlide(opsi){

    window.onload = function(e){

        function obj(obj){
            var cekSelector = obj.match(/^(\#|\.)([a-zA-Z0-9\-\_]*)$/);
            
            if(cekSelector === null || cekSelector === undefined){
                return undefined;
            }
        
            if(cekSelector[1] === '.'){
        
                return document.getElementsByClassName(cekSelector[2]);
        
            }else if(cekSelector[1] === '#'){
        
                return document.getElementById(cekSelector[2]);
        
            }
                
        } 
        
        function rp(obj, attr){
            return obj.style.removeProperty(attr);
        }

        function gmt(obj){
            return parseInt(obj.style[mt].replace('px', ''))
        }

        function ct(val){
            return clearTimeout(val);
        }

        function osh(obj){
            return parseInt(obj.offsetHeight);
        }

        function stMt(obj, val){
            return obj.style[mt] = val + 'px';
        }

        if(typeof opsi === 'object'){
            
            var objCntAnim     = obj('.containerAnimasi');
            var pt             = 'padding-top';
            var pb             = 'padding-bottom';
            var dp             = 'display';
            var mt             = 'margin-top';
            var nm             = 'number';
            var totalCntAnim   = objCntAnim.length;

            for(var a = 0; a < totalCntAnim; a++){
                
                var sglCntAnim = (function sglCntAnimF(objI){
                    
                    try{

                        var timeOutIdle;
                        var timeOutIdle2;
                        var timeOutPosisiNormal;
                        var opsiAnimasi    = opsi['animasi' + (a+1)];
                        var durasiDiam     = (opsiAnimasi.durasiDiam !== undefined && opsiAnimasi.durasiDiam !== null && typeof opsiAnimasi.durasiDiam === nm) ? opsiAnimasi.durasiDiam : 1; 
                        var durasiScroll   = (opsiAnimasi.durasiScroll !== undefined && opsiAnimasi.durasiScroll !== null && typeof opsiAnimasi.durasiScroll === nm) ? opsiAnimasi.durasiScroll : 2;
                        var durasiKembali  = (opsiAnimasi.durasiKembali !== undefined && opsiAnimasi.durasiKembali !== null && typeof opsiAnimasi.durasiKembali === nm) ? opsiAnimasi.durasiKembali : 2;
                        var calcDurScrKem  = ((totalChCntAnim/durasiKembali) < 0) ? 0 : durasiKembali;
                        var objSiglAnimasi = objI.getElementsByClassName('textAnimasi');
                        var tinggiCnt      = getComputedStyle(objI).getPropertyValue('height').toLocaleLowerCase();
                        var setTinggiCnt   = (tinggiCnt === '0px') ? '14px' : tinggiCnt;
                        var totalChCntAnim = objSiglAnimasi.length; 
                        var iterasiA       = 0;
                        var iterasiB       = 0;
                        
                        objI.style.overflowY = 'hidden';
                        objI.style.height    =  setTinggiCnt;

                        if(opsiAnimasi.mulaiDari === 'bawahKeAtas'){

                            var posisiIdle     = (function posisiIdleF(){

                                if(iterasiA <= (totalChCntAnim-1)){
    
                                    if(iterasiA === 0){ //set ukurn setiap animasi pase 1
    
                                        var itaA1      = objSiglAnimasi[iterasiA];
                                        var itaA2      = objSiglAnimasi[(iterasiA+1)];
    
                                        rp(itaA1, pt); rp(itaA1, pb); rp(itaA1, mt); 
                                        rp(itaA2, pt); rp(itaA2, pb); rp(itaA2, mt);
    
                                        var itaA1Ofhg  = (osh(itaA1)/2);
                                        var itaA2Ofhg  = (osh(itaA2)/2);
                                        var objISet1   = (osh(objI)/2);
                                        var padPosisi1 = ((objISet1-itaA1Ofhg) < 0) ? 0 : (objISet1-itaA1Ofhg);
                                        var padPosisi2 = ((objISet1-itaA2Ofhg) < 0) ? 0 : (objISet1-itaA2Ofhg);
    
                                        itaA1.style.cssText = pt + ': '+ padPosisi1 + 'px; '+ pb +': ' + padPosisi1 + 'px;';
                                        itaA2.style.cssText = pt + ': '+ padPosisi2 + 'px; '+ pb +': ' + padPosisi2 + 'px;';
                                    
                                    }
    
                                    ct(timeOutIdle); // bersihkan timeout 
                                    timeOutIdle = setTimeout(function(){
    
                                        if(iterasiA >= 1 && iterasiA < (totalChCntAnim-1)){ //set ukurn setiap animasi pase 2
    
                                            var itaA3 = objSiglAnimasi[(iterasiA+1)];
    
                                            rp(itaA3, pt); 
                                            rp(itaA3, pb); 
                                            rp(itaA3, mt); 
    
                                            var itaA3Ofhg  = (osh(itaA3)/2);
                                            var objISet2   = (osh(objI)/2);
                                            var padPosisi3 = ((objISet2-itaA3Ofhg) < 0 ) ? 0 : (objISet2-itaA3Ofhg);
    
                                            itaA3.style.cssText = pt + ': ' + padPosisi3 + 'px; '+ pb +': ' + padPosisi3 + 'px;';
                                        
                                        }
    
                                        ct(timeOutIdle);
                                        return scrollKeAtas();
                                        
                                    }, (durasiDiam <= 0) ? 0 : 1000*durasiDiam);
    
                                    var scrollKeAtas = (function scrollKeAtasF(){
    
                                        var timeoutScrollKeAtas;
                                        var marginTopOutFrm  = (0-osh(objSiglAnimasi[iterasiA]));
                                        var posisiOutFrame   = (iterasiA >= (totalChCntAnim-1)) ? (osh(objSiglAnimasi[iterasiA]) > osh(objI)) ? marginTopOutFrm : 0 : marginTopOutFrm;
                                        var tempPosisiAktual = 0;
    
                                        (function scrollKeLuarFrame(){
    
                                            ct(timeoutScrollKeAtas);
                                            timeoutScrollKeAtas = setTimeout(function(e){
                                                if(tempPosisiAktual > posisiOutFrame){
    
                                                    stMt(objSiglAnimasi[iterasiA], tempPosisiAktual);
                                                    tempPosisiAktual-=(durasiScroll/2);
                                                    
                                                    return scrollKeLuarFrame();
                                                }else{
                                                    
                                                    stMt(objSiglAnimasi[iterasiA], posisiOutFrame);
                                                    objSiglAnimasi[iterasiA].style.display   ='none';
                                                    
                                                    if(iterasiA >= (totalChCntAnim-1)){
                                                        return(opsiAnimasi.ulangi === true) ? normalPosisi() : ct(timeoutScrollKeAtas);
                                                    }else{
                                                        iterasiA++;
                                                        posisiIdle();
                                                    }
                                                
                                                }
    
                                            }, durasiScroll);
    
                                        }());
    
                                        return scrollKeAtasF;
                                    });
    
                                }
    
                                return posisiIdleF;
                            }());
                            var normalPosisi    = (function normalPosisiF(){

                                if(iterasiA >= 0){
    
                                        var calcNormalPosisi = (iterasiA <= 0) ? 0 : osh(objSiglAnimasi[iterasiA]);
                                        var posisiAktual     = gmt(objSiglAnimasi[iterasiA]);
                                        var stsDp            = false; 
                                        
                                        rp(objSiglAnimasi[iterasiA], dp);
                                        
                                        (function scrollPosisiNormal(){ 
    
                                            if(posisiAktual < calcNormalPosisi){
                                                
                                                ct(timeOutPosisiNormal);
                                                timeOutPosisiNormal = setTimeout(function(){
                                                    
                                                    if(objSiglAnimasi[iterasiA].offsetTop >= objI.offsetTop && iterasiA >= 1){
    
                                                        if(stsDp === false){     
                                                        
                                                            iterasiA--;
                                                            
                                                            stsDp        = true;
                                                            posisiAktual = gmt(objSiglAnimasi[iterasiA]);
                                                            rp(objSiglAnimasi[iterasiA], dp);
                                                        
                                                        }
                                                    }
    
                                                    stMt(objSiglAnimasi[iterasiA], posisiAktual);
    
                                                    posisiAktual+=(calcDurScrKem);
                                                    return scrollPosisiNormal();
                                                }, durasiKembali);
                
                                            }else{
    
                                                stMt(objSiglAnimasi[iterasiA], calcNormalPosisi);
                                                ct(timeOutPosisiNormal);

                                                iterasiA--;
                                                return normalPosisiF();
                
                                            }
                
                                        }());
                                        
                                        return normalPosisiF;
                                        
                                }else{
    
                                    iterasiA = 0;
                                    ct(timeOutPosisiNormal);
                                    return posisiIdle();
    
                                }
    
                            });

                        }else if(opsiAnimasi.mulaiDari === 'atasKeBawah'){

                            var atasKeBawah = (function atasKeBawahF(){
                              
                                if(iterasiB < totalChCntAnim){

                                    if(iterasiB <= 1){ //set ukuran animasi pase 1
                
                                        var itaB1     = objSiglAnimasi[iterasiB];
                                        var itaB2     = objSiglAnimasi[(iterasiB+1)];
                            
                                        rp(itaB1, pt); rp(itaB1, pb); rp(itaB1, mt); 
                                        rp(itaB2, pt); rp(itaB2, pb); rp(itaB2, mt);
                            
                                        var itaB1Ofhg      = (osh(itaB1)/2);
                                        var itaB2Ofhg      = (osh(itaB2)/2);
                                        var objISet2       = (osh(objI)/2);
                                        var padPosisi4     = ((objISet2-itaB1Ofhg) < 0) ? 0 : (objISet2-itaB1Ofhg);
                                        var padPosisi5     = ((objISet2-itaB2Ofhg) < 0) ? 0 : (objISet2-itaB2Ofhg);
                            
                                        itaB1.style.cssText = pt + ': '+ padPosisi4 + 'px; '+ pb +': ' + padPosisi4 + 'px;';
                                        itaB2.style.cssText = pt + ': '+ padPosisi5 + 'px; '+ pb +': ' + padPosisi5 + 'px;';
                                        stMt(itaB2, (0-osh(itaB2)));
                                        itaB2.parentNode.insertBefore(itaB2, itaB1);

                                        iterasiB = 1;

                                    }else if( iterasiB >= 2){
                                        
                                        var objAnim2               = objSiglAnimasi[iterasiB]; 
                                        var objAnim2Ofhg           = osh(objAnim2);
                                        var padPosisi6             = (osh(objI)/2)-(objAnim2Ofhg/2);
                                            
                                        objAnim2.style.cssText = pt + ': ' + padPosisi6 + 'px; ' + pb + ': ' + padPosisi6 + 'px; ';
                                        tempPosisiAktual       = (0-osh(objAnim2));
                                        objAnim2.style[mt]     = tempPosisiAktual + 'px';
                                        
                                        objI.insertBefore(objAnim2, objSiglAnimasi[0]);
                                            
                                        iterasiB++;
                                    }

                                    var timeoutScrollKeBawah2;
                                    var timeOutnormalPosisi2;
                                    var posisiAktual2    = gmt(objSiglAnimasi[0]);
                                    var tempPosisiAktual = posisiAktual2;
                                    var posisiIdle2      = (function posisiIdle2F(){
                                        
                                        ct(timeOutIdle2);
                                        timeOutIdle2 = setTimeout(function(){
                                            
                                            return scrollKeBawah();
                                            
                                        }, 1000*durasiDiam);
                                        
                                        return posisiIdle2F;
                                    }());

                                    var normalPosisi2    = (function normalPosisi2F(){

                                         if((iterasiB-1) >= 1){
                                            
                                            var objAnimasi2         = objSiglAnimasi[0];
                                            var posisiOutFrameAtas  = ((iterasiB-1) <= 0) ? 0 : (0-osh(objAnimasi2));
                                            var tempOutFrameAtas    = 0;

                                            (function scrollKeAtas2(){
                                                
                                                ct(timeOutnormalPosisi2);
                                                timeOutnormalPosisi2 = setTimeout(function(){
                                                    
                                                    if(tempOutFrameAtas > posisiOutFrameAtas){

                                                        stMt(objAnimasi2, tempOutFrameAtas);
                                                        tempOutFrameAtas-=calcDurScrKem;

                                                        return scrollKeAtas2();
                                                    }else{

                                                        stMt(objAnimasi2, posisiOutFrameAtas);
                                                        rp(objAnimasi2, mt);
                                                        rp(objAnimasi2, pb);
                                                        rp(objAnimasi2, pt);
                                                        
                                                        if((iterasiB-1) >= (totalChCntAnim-1)){
                                                            
                                                            objI.appendChild(objAnimasi2);

                                                        }else{
                                                            
                                                            objI.insertBefore(objAnimasi2, objSiglAnimasi[iterasiB])
                                                            
                                                        }

                                                        iterasiB--;
                                                        return normalPosisi2F();
                                                    }

                                                }, durasiScroll);

                                                
                                            }());
                                                    
                                        }else{

                                            ct(timeOutnormalPosisi2);
                                            iterasiB = 0;
                                            return atasKeBawahF();

                                        }

                                        return normalPosisi2F;
                                    });

                                    function scrollKeBawah(){ 
                                            
                                        if(tempPosisiAktual < 0){

                                            ct(timeoutScrollKeBawah2);
                                            timeoutScrollKeBawah2 = setTimeout(function(){
                                                
                                                stMt(objSiglAnimasi[0], tempPosisiAktual);
                                                tempPosisiAktual+=(durasiScroll/2);
                                                return scrollKeBawah();

                                            }, durasiScroll);
                                        
                                        }else{

                                            stMt(objSiglAnimasi[0], 0);
                                            ct(timeoutScrollKeBawah2);
                                            ct(timeOutIdle2);
                                            
                                            if(iterasiB <= 1){
                                                
                                                iterasiB++;

                                            }
                                            
                                            if(iterasiB >= totalChCntAnim){

                                                if(opsiAnimasi.ulangi === true){

                                                    iterasiB = totalChCntAnim;

                                                    ct(timeOutIdle2);
                                                    timeOutIdle2 = setTimeout(function(){

                                                        ct(timeOutIdle2);
                                                        return normalPosisi2();
                                                        
                                                    }, 1000*durasiDiam);
                                                }
                                                
                                            }

                                            return atasKeBawahF();

                                        }

                                    }
                                    
                                    return atasKeBawahF;
                                }
                                
                            }());
                            
                        }

                    }catch(err){

                        return console.log('Animasi Tidak Dapat di Jalankan, ' + err);

                    }
                    
                    return sglCntAnimF;
                }(objCntAnim[a]));
    
            }

        }
    }

}
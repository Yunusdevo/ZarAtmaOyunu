var benimtahmin = document.getElementById('benimtahmin');
        var biltahmin = document.getElementById('bilgisayartahmin');
        var skorSpan = document.getElementById('skor');
        var skor=3;
        var bensayı,bilsayı;
        
        function benimtahminolustur(){
            bensayı=0;
            while(bensayı <=0){
                bensayı=Math.round(Math.random()*6);
            }
            switch(bensayı){
                case 1: benimtahmin.style.backgroundImage='url(image/1.jpg)';
                break;
                case 2: benimtahmin.style.backgroundImage='url(image/2.jpg)';
                break;
                case 3: benimtahmin.style.backgroundImage='url(image/3.jpg)';
                break;
                case 4: benimtahmin.style.backgroundImage='url(image/4.jpg)';
                break;
                case 5: benimtahmin.style.backgroundImage='url(image/5.jpg)';
                break;
                case 6: benimtahmin.style.backgroundImage='url(image/6.jpg)';
                break;
            }
        }
        function biltahminolustur(){
            bilsayı=0;
            while(bilsayı <=0){
                bilsayı=Math.round(Math.random()*6);
            }
            switch(bilsayı){
                case 1: bilgisayartahmin.style.backgroundImage='url(image/1.jpg)';
                break;
                case 2: bilgisayartahmin.style.backgroundImage='url(image/2.jpg)';
                break;
                case 3: bilgisayartahmin.style.backgroundImage='url(image/3.jpg)';
                break;
                case 4: bilgisayartahmin.style.backgroundImage='url(image/4.jpg)';
                break;
                case 5: bilgisayartahmin.style.backgroundImage='url(image/5.jpg)';
                break;
                case 6: bilgisayartahmin.style.backgroundImage='url(image/6.jpg)';
                break;
            }
            if(bilsayı < bensayı){
                skor++;
                skorSpan.innerHTML="Skorunuz:"+skor;
            }else if(bilsayı> bensayı){
                skor--;
                skorSpan.innerHTML="Skorunuz:"+skor
                if(skor<=0){
                    alert('Üzgünüm Kaybettiniz.');
                }
            }
        }
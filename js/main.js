const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// Hàm rút gọn chữ
function ShorterStrig(Selector,index){
    if($(Selector).innerHTML.length > index){
        var newString = $(Selector).innerHTML.slice(0,index+1) +  '...'
        $(Selector).innerHTML = newString
    }
}

// Main Page Behavior Handler
// More Options button- Main page
const moreBtn = $('.user__profile__action__more__options__button')
const exitOption = $('.user__profile__action__more__options__button__exit')

moreBtn.onclick = function () {
    exitOption.classList.toggle('active')
}

// Profile navbar item active 
const profileNavItems = $$('.main__page__user__profile__playlist__navbar__item')

profileNavItems.forEach(function (item,index){
    item.onclick = function(){
        $('.main__page__user__profile__playlist__navbar__item.profile__navbar__item__active').classList.remove('profile__navbar__item__active')
        item.classList.add('profile__navbar__item__active')
    }
})
// Slider
var SlideItems = $$('.slide')
setInterval(function(){
    setTimeout(function(){      
        $('.slide.slide__1--active').classList.remove('slide__1--active')
        $('.slide.slide__2--active').classList.remove('slide__2--active')
        $('.slide.slide__3--active').classList.remove('slide__3--active')
            SlideItems[2].classList.add('slide__1--active')
            SlideItems[0].classList.add('slide__2--active')
            SlideItems[1].classList.add('slide__3--active')
    },1000) 
    setTimeout( function(){
        $('.slide.slide__1--active').classList.remove('slide__1--active')
        $('.slide.slide__2--active').classList.remove('slide__2--active')
        $('.slide.slide__3--active').classList.remove('slide__3--active')
            SlideItems[1].classList.add('slide__1--active')
            SlideItems[2].classList.add('slide__2--active')
            SlideItems[0].classList.add('slide__3--active')
    },2500)
    setTimeout( function(){
        
        $('.slide.slide__1--active').classList.remove('slide__1--active')
        $('.slide.slide__2--active').classList.remove('slide__2--active')
        $('.slide.slide__3--active').classList.remove('slide__3--active')
            SlideItems[0].classList.add('slide__1--active')
            SlideItems[1].classList.add('slide__2--active')
            SlideItems[2].classList.add('slide__3--active')
    },4000)
},5000)



// Render Song 
// Play-Pause-Seek
// CD Rotate
// Next-Prev-Random
// Next/Repeat When Ended
// Active Song
// Scroll To Active
// Play Song When Click Song
const musicList = $('.music__list')
const cd = $('.thumbnail')
const media__title = $('.media__title')
const media__singer = $('.media__singer')
const time__right = $('.time__right')
const audio = $('.audio')
const PlayBtn = $('.play__button')
const PrevBtn = $('.prev__button')
const NextBtn = $('.next__button')
const RandomBtn = $('.random__button')
const Redobtn = $('.redo__button')
const processer = $('.processer')
const processed = $('.processed')
const MusicItem = $$('.row.music__item')
const VolumeBar = $('.player__control__right__volume__bar')
const VolumeProcessed = $('.player__control__right__volume__bar__process')
const VolumeBtn = $('.volume__button')
const PlayAllBtn = $('.mylist__header__right__play__all__button')
const CD = $('.thumbnail__wrapper')
const notes = $$('.note')
const note1 = $('.note-1')
const note2 = $('.note-2')
const note3 = $('.note-3')
const note4 = $('.note-4')


const app = {
    currentIndex: 0,
    isPLaying: false,
    isgift: false,
    isbg: false,
    ismute: false,
    songs: [
        {
            name: 'Stay',
            singer: 'The Kid LAROI, Justin Bieber',
            time: '2:55',
            path: './assets/songs/mp3/stay.mp3',
            image: './assets/songs/img/stay.webp'
        },
        {
            name: 'Reality',
            singer: 'Lost Frequencies',
            time: '2:39',
            path: './assets/songs/mp3/reality.mp3',
            image: './assets/songs/img/reality.webp'
        },
        {
            name: 'Payphone',
            singer: 'Payphone ft. Wiz Khalifa',
            time: '3:37',
            path: './assets/songs/mp3/payphone.mp3',
            image: './assets/songs/img/payphone.webp'
        },
        {
            name: 'Everything I Need',
            singer: 'Skylar Grey',
            time: '3:25',
            path: './assets/songs/mp3/EveryThingINeed.mp3',
            image: './assets/songs/img/EveryThingINeed.webp'
        },
        {
            name: 'Eenie Meenie',
            singer: 'Sean Kingston, Justin Bieber',
            time: '3:05',
            path: './assets/songs/mp3/EenieMeenie.mp3',
            image: './assets/songs/img/EenieMeenie.webp'
        },
        {
            name: 'Hiddenburg Lover',
            singer: 'Anson Seabra',
            time: '5:09',
            path: './assets/songs/mp3/HiddenburgLover.mp3',
            image: './assets/songs/img/HiddenburgLover.webp'
        },
        {
            name: 'Here your perfect',
            singer: 'Jamie Miller',
            time: '2:50',
            path: './assets/songs/mp3/HereYourPerfect.mp3',
            image: './assets/songs/img/HereYourPerfect.webp'
        },
        {
            name: 'Night change',
            singer: 'One Direction',
            time: '4:01',
            path: './assets/songs/mp3/NightChange.mp3',
            image: './assets/songs/img/NightChange.webp'
        }
    ],
    // Render songs ra giao diện người dùng
    render: function(){
        var htmls = this.songs.map( function(song,index){
            return ` <!-- =================== Song ${index+1} =================== -->
                <div class="row music__item" style="border-bottom: 1px solid rgba(255,255,255,0.1);" data-index="${index}">                                
                    <div class="c-6 gutter">
                        <div class="music__item__left">
                            <div class="music__item__left__avatar__wrapper">
                                <img src="${song.image}" alt="" class="music__item__left__avatar">
                                <img src="./assets/img/main page/music list/icon-playing.gif" alt="" class="music__item__left__avatar__gif">
                                <i class="fas fa-play music__item__left__avatar__wrapper__icon"></i>
                            </div>
                            <div class="music__item__left__data">
                                <p class="music__item__left__data__name">${song.name}</p>
                                <p class="music__item__left__data__singer">${song.singer}</p>
                            </div>
                        </div>
                    </div>
                    <div class="c-6 gutter">
                        <div class="music__item__right">
                            <p class="music__time">${song.time}</p>
                            <div class="music__options">
                                <div class="music__options__like__wrapper">
                                    <i class="fas fa-heart music__options__like"></i>
                                </div>
                                <div class="music__options__more__wrapper">
                                    <i class="fas fa-ellipsis-h music__options__more"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        })
        musicList.innerHTML = htmls.join(' ')   
    },
    // Định nghĩa thuộc tính đầu tiên
    defineProperties: function(){
        Object.defineProperty( this , 'CurrentSong' , {
            get: function (){
                return this.songs[this.currentIndex]               
            }
        } )
    },
    // Render song hiện tại trên player control
    loadCurrentSong: function(){
        cd.src = this.CurrentSong.image
        media__title.innerHTML = this.CurrentSong.name
        media__singer.innerHTML = this.CurrentSong.singer
        audio.src = this.CurrentSong.path
        time__right.innerHTML = this.CurrentSong.time
        
        this.ShorterSingerName()
    },
    // Xử lí sự kiện 
    eventHandler: function(){
        // Play xong khi click play button
        PlayBtn.onclick = function (){
            app.PlaySong()
        }
        // PLay all music button onclick
        PlayAllBtn.onclick = function(){
            audio.play()
            audio.onplay = function(){
                app.isPLaying = true
                PlayBtn.classList.add('active')  
                app.cdAminationOn()
            }
        }
        // Xử lí Process bar
        audio.ontimeupdate = function(){
            var processPercent = Math.floor(audio.currentTime / audio.duration * 100 )
            processed.style = `width: ${processPercent}%;`
            processer.onclick = function(e){
                var clickPercent = Math.floor(e.offsetX / processer.offsetWidth * audio.duration)
                audio.currentTime = clickPercent
                processed.style = `width: ${clickPercent}%;`
            }
            // Xử lí CountDown
            var timeleft = document.getElementById('timeleft');
            var ml = parseInt((audio.duration / 60 - audio.currentTime / 60) % 60);
            var sl = parseInt(audio.duration - audio.currentTime) % 60;         
            if ( isNaN(sl) ){
                $('.time__left').innerHTML = app.CurrentSong.time
            }
            else if( sl < 10 ){
                $('.time__left').innerHTML = ml + ':0' + sl 
            }else{
                $('.time__left').innerHTML = ml + ':' + sl 
            }
        }
        // Xử lí Volume bar
        VolumeBar.onclick = function(e){
            var VolumeProcessedPercent = Math.floor(e.offsetX * 100 / VolumeBar.offsetWidth)
            VolumeProcessed.style = `width: ${VolumeProcessedPercent}%;`
            audio.volume = VolumeProcessedPercent/100
        }
        // Mute/Unmute
        VolumeBtn.onclick = function(){
            VolumeBtn.classList.toggle('on-mute', !app.ismute)
            if( !app.ismute ){
                audio.volume = 0
                VolumeProcessed.style = `width: 0;`
                app.ismute = true
                VolumeBar.onclick = function(e){
                    console.log('check')
                    VolumeProcessed.style = `width: ${Math.floor(e.offsetX * 100 / VolumeBar.offsetWidth)}%;`
                    audio.volume = Math.floor(e.offsetX * 100 / VolumeBar.offsetWidth)/100
                    $('.volume__button.on-mute').classList.remove('on-mute')
                }                
            }else{
                audio.volume = 1
                VolumeProcessed.style = `width: 100%;`
                app.ismute = false
            }
        }
        // Next Song/Click
        NextBtn.onclick = function(){
            if( isRandom ){
                app.randomSong()
            }else{
                app.nextSong()
            }
            audio.play()
            audio.onplay = function(){
                app.isPLaying = true
                PlayBtn.classList.add('active')                 
                app.activeSong()
                app.cdAminationOn()
            }
        }
        // Prev Song/Click 
        PrevBtn.onclick = function(){
            if( isRandom ){
                app.randomSong()
            }else{
                app.prevSong()
            }
            audio.play()
            audio.onplay = function(){
                app.isPLaying = true
                PlayBtn.classList.add('active')
                app.activeSong()
                app.cdAminationOn()
            }
        }
        // Random Song
        var isRandom = false
        RandomBtn.onclick = function(){
            RandomBtn.classList.toggle('active',!isRandom)
            isRandom = !isRandom
        }
        // Repeat Song
        var isRepeat = false
        Redobtn.onclick = function(){
            Redobtn.classList.toggle('active',!isRepeat)
            isRepeat = !isRepeat
            console.log(isRepeat)
            
        }
        // Xử lí audio onended
        audio.onended = function(){
           if( isRepeat ){
               audio.play()
               app.cdAminationOn()
           }else{
               NextBtn.click()
               app.cdAminationOn()
           }
        }
        // Xử lí click Song
        musicList.onclick = function(e){
            const songNode = e.target.closest('.music__item')            
            if(songNode){
                app.currentIndex = Number(songNode.dataset.index)
                app.isPLaying = true
                app.loadCurrentSong()
                audio.play()
                audio.onplay = function(){
                    app.activeSong()
                    PlayBtn.classList.add('active')  
                    app.cdAminationOn()
                }
            }
        }
    },
    // Hàm xử lý logic next song
    nextSong: function(){
        this.currentIndex++
        if( this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    // Hàm xử lí logic prev song
    prevSong: function(){
        this.currentIndex--
        if( this.currentIndex < 0 ){
            this.currentIndex = this.songs.length-1
        }
        this.loadCurrentSong()
    },
    // Hàm xử lí logic random song
    randomSong: function(){
        let newIndex
        newIndex = Math.floor(Math.random() * this.songs.length )
        this.currentIndex = newIndex
        this.loadCurrentSong()
        
    },
    // Hàm xử lí hiệu ứng CD-on
    cdAminationOn: function(){ 
        CD.style = `animation: spin linear 10s infinite;`  
        note1.style = `animation: spin-opaciy linear 3s infinite;`    
        note2.style = `animation: spin-opaciy linear 5s infinite;`  
        note3.style = `animation: spin-opaciy linear 7s infinite;`  
        note4.style = `animation: spin-opaciy linear 6s infinite;`     
    },
    // Hàm xử lí hiệu ứng Cd-off
    cdAnimationOff: function(){
        CD.style = `animation: none;`   
        notes.forEach((note,index)=>{
            note.style = `animation: none;`
        })     

    },
    // Hàm xử lí hiệu song khi active
    activeSong: function(){
        if( app.isbg ){
            musicList.querySelector('.music__item.bg-active').classList.remove('bg-active') 
        }                        
        musicList.querySelectorAll('.music__item')[app.currentIndex].classList.add('bg-active')
        if( app.isgift ){
            musicList.querySelector('.music__item.active').classList.remove('active')                        
        }
        musicList.querySelectorAll('.music__item')[app.currentIndex].classList.add('active')            
        app.isgift = true
        app.isbg = true
    },
    // Play current song
    PlaySong: function(){
        if( !app.isPLaying ){
            audio.play()
        }else if( app.isPLaying ){
            audio.pause()
        }
        audio.onplay = function(){
            app.isPLaying = true
            PlayBtn.classList.add('active')  
            app.cdAminationOn()
        }
        audio.onpause = function(){
            app.isPLaying = false
            PlayBtn.classList.remove('active')
            app.cdAnimationOff()
        }
    },
    // Shorter Singer Name
    ShorterSingerName: function(){
        var SingerName = $('.media__singer')
        if(SingerName.innerHTML.length > 20){
            var NewSingerName = SingerName.innerHTML.slice(0,21) + '...'
            $('.media__singer').innerHTML = NewSingerName
        }
    },
    // Call once to start all method
    start: function(){
        this.render()
        this.defineProperties()
        this.loadCurrentSong()
        this.eventHandler()
    }
}
app.start()


// Xử lí Player queue

// Switch between Danh sách phát/Nghe gần đây
const HeaderSwithBtns = $$('.player__queue__header__tab__bar__slidebar__item')
// Danh sách phát - Hàng chờ
const PlayerQueueMusicList = $('.player__queue__list')
// Danh sách phát-Hàng chọ72
const PlayerQueueMusic = $('.player__queue__songs')
// Danh sách đề xuất
const PlayerQueueRecommened = $('.player__queue__recommened__songs')
// Nghe gần đây
const PlayerQueueRecently = $('.player__queue__listen__recently__songs')
HeaderSwithBtns.forEach(function(HeaderSwithBtn,index){
    HeaderSwithBtn.onclick = function(){
        $('.player__queue__header__tab__bar__slidebar__item.active').classList.remove('active')
        HeaderSwithBtn.classList.add('active')
        switch(index){
            case 0:
                PlayerQueueMusicList.style = `display: block;`
                PlayerQueueRecently.style = `display: none;`
                break;
            case 1:
                PlayerQueueMusicList.style = `display: none;`
                PlayerQueueRecently.style = `display: flex;`
                break;
        }
    }
})
// Load Song by Array
const Music = {
    // Hàng đợi
    QueueSongs: [
        {
            name: 'Reality',
            singer: 'Lost Frequencies',
            image: './assets/PlayerQueue/reality.webp'
        },
        {
            name: 'Before You Go',
            singer: 'Olly Murs',
            image: './assets/PlayerQueue/BeforeYouGo.webp'
        },
        {
            name: 'Fly Me To The Moon',
            singer: 'Thomas Anders',
            image: './assets/PlayerQueue/FlyMeToTheMoon.webp'
        },
        {
            name: 'Spectre',
            singer: 'Alan Walker',
            image: './assets/PlayerQueue/Spectre.webp'
        },
        {
            name: 'Talking to the Moon',
            singer: 'ALZA',
            image: './assets/PlayerQueue/TalkingToTheMoon.webp'
        },
        {
            name: 'It will Rain',
            singer: 'Bruno Mars Tribute,The True Star',
            image: './assets/PlayerQueue/ItWillRain.webp'
        },
    ],
    // Đề xuất
    RecommendSongs: [
        {
            name: 'The River',
            singer: 'Axel Johansson',
            image: './assets/Recommend/TheRiver.webp'
        }
    ],
    // Nghe gần đây
    RecentlySongs: [
        {
            name: 'Talking to the Moon',
            singer: 'ALZA',
            image: './assets/Recent/TalkingToTheMoon.webp'
        },
        {
            name: 'Fly Me To The Moon',
            singer: 'Thomas Anders',
            image: './assets/Recent/FlyMeToTheMoon.webp'
        },
        {
            name: 'On My Way',
            singer: 'Alan Walker',
            image: './assets/Recent/OnMyWay.webp'
        },
        {
            name: 'Reality',
            singer: 'Lost Frequencies',
            image: './assets/Recent/Reality.webp'
        },
        {
            name: 'Señorita',
            singer: 'Shawn Mendes',
            image: './assets/Recent/Sernorita.webp'
        },
        {
            name: 'To The Moon',
            singer: 'hooligan.',
            image: './assets/Recent/ToTheMoon.webp'
        }
    ],
    // Render Danh sách phát-Hàng chờ
    QueueSongsRender: function(){
        var htmls = this.QueueSongs.map(function(QueueSong,index){
            return `<li class="player__queue__song">
                        <div class="player__queue__song__left">
                            <div class="player__queue__song__img__wrapper">
                                <img src="${QueueSong.image}" alt="" class="player__queue__song__img">
                                <i class="fas fa-play player__queue__song__play__icon"></i>
                            </div>
                            <div class="player__queue__song__data">
                                <h1 class="player__queue__song__name mb-4">${QueueSong.name}</h1>
                                <h1 class="player__queue__song__singer">${QueueSong.singer}</h1>
                            </div>
                        </div>
                        <div class="player__queue__song__right">
                            <div class="player__queue__song__right__icon__wrapper">
                                <i class="fas fa-heart player__queue__song__right__like__icon"></i>
                            </div>
                            <div class="player__queue__song__right__icon__wrapper">
                                <i class="fas fa-ellipsis-h player__queue__song__right__more__icon"></i>
                            </div>
                        </div>
                    </li>`
        })
        PlayerQueueMusic.innerHTML = htmls.join(' ')
    },
    // Render Danh sách phát-Đề xuất
    RecommendSongsRender: function(){
        var htmls = this.RecommendSongs.map(function(RecommendSong,index){
            return `<li class="player__queue__recommened__song">
                        <div class="player__queue__recommened__song__left">
                            <div class="player__queue__recommened__song__img__wrapper">
                                <img src="${RecommendSong.image}" alt="" class="player__queue__recommened__song__img">
                                <i class="fas fa-play player__queue__recommened__song__icon"></i>
                            </div>
                            <div class="player__queue__recommened__song__data">
                                <h1 class="player__queue__recommened__song__name mb-4">${RecommendSong.name}</h1>
                                <h2 class="player__queue__recommened__song__singer">${RecommendSong.singer}</h2>
                            </div>
                        </div>
                        <div class="player__queue__recommened__song__right">
                            <div class="player__queue__recommened__song__right__icon__wrapper">
                                <i class="fas fa-plus player__queue__recommened__song__right__like__icon"></i>
                            </div>
                            <div class="player__queue__recommened__song__right__icon__wrapper">
                                <i class="fas fa-ellipsis-h player__queue__recommened__song__right__more__icon"></i>
                            </div>
                        </div>
                    </li>`
        })
        PlayerQueueRecommened.innerHTML = htmls.join(' ')
    },
    RecentlySongsRender: function(){
        var htmls = this.RecentlySongs.map(function(RecentlySong,index){
            return `<li class="player__queue__listen__recently__song">
                        <div class="player__queue__listen__recently__song__left">
                            <div class="player__queue__listen__recently__song__img__wrapper">
                                <img src="${RecentlySong.image}" alt="" class="player__queue__listen__recently__song__img">
                                <i class="fas fa-play player__queue__listen__recently__song__icon"></i>
                            </div>
                            <div class="player__queue__listen__recently__song__data">
                                <h1 class="player__queue__listen__recently__song__name mb-4">${RecentlySong.name}</h1>
                                <h2 class="player__queue__listen__recently__song__singer">${RecentlySong.singer}</h2>
                            </div>
                        </div>
                        <div class="player__queue__listen__recently__song__right">
                            <div class="player__queue__listen__recently__song__right__icon__wrapper">
                                <i class="fas fa-heart player__queue__listen__recently__song__right__like__icon"></i>
                            </div>
                            <div class="player__queue__listen__recently__song__right__icon__wrapper">
                                <i class="fas fa-ellipsis-h player__queue__listen__recently__song__right__more__icon"></i>
                            </div>
                        </div>
                    </li>`
        })
        PlayerQueueRecently.innerHTML = htmls.join(' ')
    },
    start: function(){
        this.QueueSongsRender()
        this.RecommendSongsRender()
        this.RecentlySongsRender()
    }
}
Music.start()


const AutoBtn = $('.player__queue__recommend__header__right__switch__status__button')

AutoBtn.onclick = function(){
    AutoBtn.classList.toggle('active')
}



// Slidebar Reponsive
const Slidebar = $('.slidebar')
const ExpandBtn = $('.tablet__slidebar__button__wrapper')

ExpandBtn.onclick = function(){
    Slidebar.classList.toggle('tablet-active')
}

// 
const musicListBtn = $('.music__list__item__wrapper')
const PlayerQueue = $('.player__queue')
musicListBtn.onclick = function(){
    PlayerQueue.classList.toggle('active')
}

// Xứ lí thu gọn chữ Placeholder header search bar
var headerSearchPlaceHolderValue = $('.main__page__header__search__input').getAttribute('placeholder')
var headerSearch = $('.main__page__header__search__input')
// Thu gọn chữ
headerSearch.placeholder = headerSearchPlaceHolderValue.slice(0 , (headerSearchPlaceHolderValue.indexOf('ĩ')+1) ) + '...'

// Xử lí suggest block trong header search bar
const headerSearchBlock = $('.main__page__header__search__bar')
const suggestModal = $('.suggest__modal')
const searchInput = $('.main__page__header__search__input')
searchInput.onclick = function(){
    headerSearchBlock.classList.add('active')
}
suggestModal.onclick = function(){
    headerSearchBlock.classList.remove('active')
}


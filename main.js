const tabheader__item = document.querySelectorAll(".tabheader__item")
const tabcontent = document.querySelectorAll(".tabcontent")



const AddContent = () => {
    tabheader__item.forEach((element,index) => {
        element.addEventListener("click" , () => {
            HideContent()
            ShowContent(index)
        })
    });
}

AddContent()


const ShowContent = (index = 0) => {
    tabheader__item[index].classList.add("tabheader__item_active")
    tabcontent[index].style.display = "block"
    tabcontent[index].classList.add("fade")
}


const HideContent = () => {

    tabheader__item.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })

    tabcontent.forEach((item) => {
        item.style.display = "none"
    })
}

HideContent()
ShowContent()



const prev_Btn = document.querySelector(".offer__slider-prev")
const next_Btn = document.querySelector(".offer__slider-next")
const current = document.querySelector("#current")
const total = document.querySelector("#total")
const offer__slide = document.querySelectorAll(".offer__slide")


let i = 0

prev_Btn.addEventListener("click", () => {
    
    if (i < 1 ) {
        // i = 0
        return
    }

    i--

    HideSlides()
    OfferSlide()
    AddSlides()
})

next_Btn.addEventListener("click", () => {

    if (i > offer__slide.length - 2) {
        // i = 0
        return
    }

    i++

    HideSlides()
    OfferSlide()
    AddSlides()
})


const OfferSlide = () => {
    offer__slide[i].style.display = "block"
}


const AddSlides = () => {
    total.innerHTML = `0${offer__slide.length}`
    current.innerHTML = `0${i+1}`
}

AddSlides()


const HideSlides =() => {
    offer__slide.forEach((item) => {
        item.style.display = "none"
    })
}

HideSlides()

OfferSlide()




// Loder ⬇️⬇️⬇️

const loader = document.querySelector(".loader")


setTimeout(() => {
    loader.style.opacity = "0"
    setTimeout(() => {
        loader.style.display = "none"
    },1000)
}, 3000);





// VAQTlar kun,soat,minut,sekund ⬇️⬇️⬇️


const dedline = new Date("01-01-2025")

const GetRemaingTime = (item) => {

    let Vaqt = Date.parse(item)
    const Hozir = Date.parse(new Date())

    let Interval = (Vaqt - Hozir)

    const days = Math.floor(Interval / (1000*60*60*24))
    const hours = Math.floor((Interval / (1000*60*60) % 24))
    const minutes = Math.floor((Interval / (1000*60) % 60))
    const seconds = Math.floor((Interval / (1000) % 60))

    // console.log(days,hours,minutes,seconds);

    return {
        days:days,
        hours:hours,
        minutes:minutes,
        seconds:seconds
    }
    
}

const FixedTime = (elem)=>{
    if (elem<10) {
        return `0${elem}`
    } else {
        return elem
    }
}

const AddTime =(malumot,selektor)=>{
    const timer = document.querySelector(selektor)
    const days =timer.querySelector("#days")
    const hours =timer.querySelector("#hours")
    const minutes =timer.querySelector("#minutes")
    const seconds =timer.querySelector("#seconds")

    const ChangeClock = () => {
        const T = GetRemaingTime(malumot)

        days.innerHTML = FixedTime(T.days)
        hours.innerHTML = FixedTime(T.hours)
        minutes.innerHTML = FixedTime(T.minutes)
        seconds.innerHTML = FixedTime(T.seconds)
    }

    setInterval(ChangeClock,1000)           // 1sekundimiz 1000 milli sekund har 1 sekundda soatni o`zgarishini obnovit qiladi

    // ChangeClock()

}
AddTime(dedline, ".timer")




// Boshqa bir Oyna ochilishi ⬇️⬇️⬇️


const modal = document.querySelector(".modal")
const Btn_ReadMore = document.querySelector(".Btn_ReadMore")
const modal__close = document.querySelector(".modal__close")


Btn_ReadMore.addEventListener("click", () => {
    document.querySelector("body").style.overflow = "hidden"
    modal.classList.add("show")
    clearTimeout(TimeOut)
})

let TimeOut = setTimeout( () => {
    document.querySelector("body").style.overflow = "hidden"
    modal.classList.add("show")
},5000)

modal.addEventListener("click", (e) => {
    if ((e.target.classList.contains("modal")) || (e.target.classList.contains("modal__close")) ) {
        modal.classList.remove("show")
        document.querySelector("body").style.overflow = ""
    }
})

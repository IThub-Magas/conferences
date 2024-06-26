const products = [
    {
        img: "img1.jpg",
        title: "Корпоративный сектор",
        opisanie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        img: "img2.jpg",
        title: "Государственные учреждения",
        opisanie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        img: "img3.jpg",
        title: "Медицинские учреждения",
        opisanie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        img: "img4.jpg",
        title: "Образование и наука",
        opisanie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        img: "img5.jpg",
        title: "Финансовый сектор",
        opisanie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        img: "img6.jpg",
        title: "Спортивные и фитнес центры, стадионы",
        opisanie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        img: "img7.jpg",
        title: "Гостиничные комплексы",
        opisanie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        img: "img8.jpg",
        title: "Транспорт",
        opisanie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        img: "img9.jpg",
        title: "Торговые центры",
        opisanie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        img: "img10.jpg",
        title: "Клубы, бары, рестораны",
        opisanie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        img: "img11.jpg",
        title: "Учреждения культуры и искусства",
        opisanie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        img: "img12.jpg",
        title: "Промышленные предприятия",
        opisanie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
]

for (let index = 0; index < products.length; index++) {
    let element = products[index].id = index + 1;
    
}

products.forEach(element => {
    let mainCard = document.createElement("div")
    mainCard.classList.add("main-card")
    mainCard.innerHTML = `
    <div class="main-card-img">
                    <img src="assets/images/categ/${element.img}" alt="">
                </div>

                <div class="main-card-cont">
                    <div class="main-card-title">
                        ${element.title}
                    </div>

                    <div class="main-card-podrobnee">
                        <div class="main-card-podrobnee-1"><div class="main-card-podrobnee-span">Подробнее</div></div>

                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0_103_757" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                            <rect x="29.2646" y="0.824951" width="28.44" height="28.44" transform="rotate(89.7371 29.2646 0.824951)" fill="url(#pattern0_103_757)"/>
                            <rect x="29.2646" y="0.824951" width="28.44" height="28.44" transform="rotate(89.7371 29.2646 0.824951)" fill="url(#pattern1_103_757)"/>
                            </mask>
                            <g mask="url(#mask0_103_757)">
                            <rect x="-39" y="-9" width="100" height="100" fill="url(#paint0_linear_103_757${element.id})"/>
                            </g>
                            <defs>
                            <pattern id="pattern0_103_757" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_103_757" transform="scale(0.0104167)"/>
                            </pattern>
                            <pattern id="pattern1_103_757" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image1_103_757" transform="scale(0.0104167)"/>
                            </pattern>
                            <linearGradient id="paint0_linear_103_757${element.id}" x1="-99.5" y1="3.50001" x2="7.20055" y2="-35.717" gradientUnits="userSpaceOnUse">
                            <stop class="main-card-change-color1" stop-color="#6DDCFF"/>
                            <stop class="main-card-change-color2" offset="1" stop-color="#7F60F9"/>
                            </linearGradient>
                            <image id="image0_103_757" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGgklEQVR4nO2dSYxWRRDHf4ORgTmIDIsHxREvimIwgBnjgjFBSZTFuIMejBcRhSCLcHEBjgpBkINBjeFkBDc8KR5dEk3YFC8yaAiYEAQGTIxomDZtisQQZrree72973v/pC/f8qq6qru6urq6HjRo0KBBgwYNGjRo0KBBXhgPzAKWAFuAL4H9QB9wEjgr7aR8Zr/bJb9dDNwLjEvdiTqhC5gHvCHCHABMxTYgz9oIzAVGpu5kbhgG3AG8BZz2IHBX+xP4AJgDXEIbYwSwCDgUQeiDNWu2nhVe2srMrAB+Syj4C5vlZbnw1tKw0/6XDARuBmlHgEdoQVwDfJaBgI2yfQr00CJ4QNxEU7N2GniMGqMTeNODII4B24FXgceBqcBEYDRwqbTR8pn9bj6wBtgh/61Kf5P0pVYYA3xbodPfAS8Ak4GOCnx0yDOWAd9X4OdroJuaYALwU8kp/xowKSBvNwiNMyX4OyB9yxrXA4cLduwE8LKYkViwtF4psTYdlj5miSuBXwuGCLYljtV0S9jjXEFXtSdHm1/E7PwM3EY+uB04WNAcZbMmdBZccN8HLiM/jJIYkbYf3+TiHWldTTvNl5I/lhUwSdZFTYqHlYyeFf+8LlgA/K3s20Mpwwv9SuHfR/1wv1IJp1ItyprYzrnAI79XWig8oTwU2klkzFNOz5A2v1dmYH9gJaxQ9tVGeqOgS+nvW28ntPCNtNBK2K7o76FYx50rFcwcFLcuBKYNsoO1Srg1EM1Rcnrm6reNXwXFCMVJ1kDATVavY+EPORPuVKwHR0PvDRYpRsHWyCPfRJwJ7ynoLwyZvXBIEVgbm2Dkm0gzYby4nUPR7qsYQh8Udys6/lLCkW8izYQ1Ctp3BaDLu4p4/uhMhG8CKqFbcZ7wdgjX00XUHnSkNDsmojlar6A5MvbGa1KGwjeBlDBZQXO2R3r/HVq4znBzMTsmkjna7aBnZ4k37I+0Aen1PPJDzgRXiGKvT9fLtQGxUzJ34RvPSpiiCER6cclnOQgd8+D3ToucvOXDHNk+H3fQmYkHLHEQsYGqWCO/39NvfM2EDx00nscDtjiI2Iy1GCO/XwTm+t1U2ZHHmAlrYxxZ7nIQmR9p5PfK/1y/rfLsMgc2Qz37czzgBwcRO4qLooqAjEIBVWlocYvjufvwAFc+f5nz0NUVBGOUCiiqBMtTUUx0PNMGLyvDZU/LJiitKjkqiygA5Zpg0xTLYKzjudZLqoyzDiLDKzx7VQmTUFQBLiWUFT5y+DIUL3+RuQIupgSXPS6jgMGUUEX40RQQygRdTAmaxbCsAi5UQlXhRzNBIRbhi2G10hOpogCERpkFN9kiHMINrQJTUQE+EcUNDbURawUFRNmIhQxF1F0B62KEIhY7iNjbiO2qgI8cvDxXl3B0HRUwLFY4epziQOYm2k8BNysOZOzVLS/YlzonMkMFuHJk9/gkttFBzF6CbjcF7HHw8bpPYnMVHbeXoNtFAZMVfNgbNl4Ts05HTszKWQGaxKwRsVMTz0S67W4SK0CTmrg1VXKuLTnQ6gpYq+BhRii/13VL5GSE0gMmoQKuUJywHQy5L9Jc0HiH1lXANgX9Z3K4omRrL7SaAmYoNqRHYpQvWJ74kp5JoIDLlZf0opRi6FJWPrSFL1pBAR2KDDgjCopWlVezMTNS+KLueFHZV68bLw12KpiyNvMp6osFysopH6dgrkdxY9BIwYs6FuuYrSzWYV3vq1MxOUdZzOIf4GnqgyeVwrd9fzA1s5uUNnJAbpXkjA6x+dqy+TZKnBydUlfTKNuOgC5qVVdT4+2cb195SErzGqA6UID5Pqm9kAtmFCyj/2NORfuqlq0cn5DnbnlxRJE3dRxJueiGKNx6Sq7/xxxRYySqWfRSoO3bdWSOCQXNkZH2hxx03Bj4JGuD0CrKnzU7V1ETdEtdTVOy7RaPaYqEwctimGQvrFSc4boW3OxsvsY70rqoZoh2XLyTdbIznQ5cKwIZLq1bPpsu6YLrJGnKlbejWac25uTtlK0zUdcXODxKi6BHGTsymbRPcvZ0qoYuUr62yij2J9GjmrHRJZl0RzMQ+P99+6Xt9pa9TnmJWl/iEb8wlyroKTFNahL9HkHo/bIDnxk5q7sWGClx+A1Sb6fImy0Ga+dkD7Be7HtbvbbQxy3Ee+Siw2bgC1FMn9x2PP862xPy2V65FrRZ/jMzUBnNBg0aNGjQoEGDBg0aNKAs/gX+UFMvCBUzGwAAAABJRU5ErkJggg=="/>
                            <image id="image1_103_757" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGwUlEQVR4nO2dSYwWRRSAC4wIHkSGxYML6kVAjAQwY0QwJqiJgBp3xIPxIogaQAQuAsIRMYh6IKgxngjghifQo0sCCYvbRWY0ZjQhCAyYGJcwn3mZ9ydknOmq7q6qrv6nv+S/
                            /PNPvap61VWvXr16bUxDQ0NDQ0NDQ0NDQ0NCAJOAe4AXgLeAz4FvgC7gNPC3fk7rd/K3z/S3zwN3AxOrbkdtAC4F7gde187sozx9WtY24D5gTNXtTApgJHA7sAM4S3j+BHYDi4CLzHAFGA08C3RTHTJtLZO6mGE2zawGfiMdpC4vSt1MO6OP
                            /U+kSw/wiGk3gGuBT6kPnwCTTTsAPKBmYt04Czxm6gpwCfCmh444AewBNgKPAzOB64BxwMX6Gaffyd8WA68Ae/V/y7Jd2mLqBDAe+LpEow8CK4HpwIgS9RihZawCDpWoz5dAh6kDwNXADwUf+S3A1IB1m6YyzhWo3
                            /fSNpMywBTgl5wNOwWsl2kkYj1lytpQYG2Stk0xKQJcCfyc00XwfpW+GplW1O1xPqepOjnFOT
                            /PtPMjcJtJBGAOcDzndNSRkrWTZ8HdBVxmEgMYqz4iV75KwjrKYWrKY77CJA79FpPrlLS96so+7FhR8dkvNjUBeAL4x7FtD1XpXuh17Px7Tc0AFjgq4Uwli7Kjb+d8yJEPdMonYPlLHA+F9oWqw1AVk1MrF1YE7vxe
                            /YRUgrjOXVgUqg6D+fNd7P1dETq/RWgliC/KRneU407gJYfKiE09NpD8WUPsYEUJtwY0UeX0zMbKEPIHHiPaTrL6Qm2y+P/IH0wJQZ4EYK7DevBr0L2BnuHa2Bl55Md8Et7DztKQ0QvdDo61CRWM
                            /ChPgsYpidmZRVcZF3qW8Dux83KFIz/Kk6CHPTbuMAEEv+vgzx+XSOcHU4J6UG3nCW+HMD1tQrdUPO1Em46ArQ4yx8TeeE1NsPODKEGPOW0sNB4FyqFFFgcTmnaiTEfAYbLZajwKk+DW4BsQ/I/8YE+Cg4viqE
                            /Ty7YBmV6DzveqBOBm7I7I8ia5xudncaKs3Uu4aSfYdKQhLyctcuaXkdESJJcjstgTceT3evqNlycB+MAi47ky5beEyG2TLDZGGvm9qiwbM3VHHvxJADYFP7LUKz9ZLI408jv1/zIpU3bBA5ss9hcpd6CQby1CZhUos3AHYcGHjBztuMVS7rG8ZQ4mxBbPn
                            /s8FFhXtGOwMOC3eZSwrkA7JCA4i+68ZQ4mxDafFgpQAtYWGZW2Xhzk9y5rwoaCbZhgKfdkkXIHCpGohixGlSh7bd4pIa8CHJRQqPMvCErL4q+iZUdRwBBKyJyPiyggQwmFOz+mAoJMQUMoode2GBZVwCBKKNX5Macg74twxsLc6fC7wgq4YGHOveBWuQh7N0NL1ieTyHWJYoYG2Yi1iQKWxNiIBXNFtIECNsdwRUjWkSz2emlNPRXwoaU6y2vhjq6jAjRMJ4o7eqLDgcxNXlpVLwXMcDiQGe9L2LFKYyLTVIAtRvaIT2GS7CiLQ96E1UcBRyxVedWnMMk0ZWOaN4GJK8AxLGWB78CsszEDsxJXgEtg1ujYoYnnYtx2p2IFOIYm7qwqOHe9d8HpKcB2DizMC2X32m6JnA6deoAKFQBc4XDCdjzYvsjxgsY7QYSnoQDJbWHjmRSuKM1pNwUA8xw2pD3B0xdodsEqL+llEkjm5Y6X9MKnYlCT1CXz4e52UAD9IYi2CDhUQXGy8jpuzIRVpuYAaxzbuiB2xfY5VErmzKdMTaE
                            /aYdL5pSPqqjcZIcbg2jCizom61jomKxDTO9rqsyE65LM4l/gaVMTgCcdO1/a/mDVlZW8mjhWdrVJGPoX3DU50uZvq7rOreAkyavpyt5QJqoHU9PF2mnxRdmgNN8OKklk54qYbHNNIugmK08a
                            /e+SSdrnIW3lpIoHzo6cb+roqWzRDZS49Yxe/++InGZzU4FLgdK2G0wNUhfnmY5a
                            /KEHHTcGPsl6TWXlRaadq0wd0Edb8moW5bDew5WroCNLutBn6AG67QzXtuCmNec7WkeuJmoWJ9U62aw709nA9arkUfrp0O9ma7jgZg2assXt2OjTgIQ0rJ0SeSbq+gKHR007oG4LF99RKnycrKXjwXVR5WurXPYncb2asdHzhJWa4C4VxLZfMazesqeL9DLHk6ZQiOylSWRBrxL6UxZITqLfI3R6r+7A58eM6q4FwBj1w8tm6WjON1sMxXndA2zVhNzD57WFnm4h3iUXHYA3gAOqmC697dh6ne0p
                            /U7+tl9/u1xHufc0mg0NDQ0NDQ0NDQ0NDaYE/wG/bBIyYuL3WwAAAABJRU5ErkJggg=="/>
                            </defs>
                            </svg>
                            
                    </div>
                </div>

                <div class="main-card-opisanie">
                    ${element.opisanie}
                </div>
    `

    document.querySelector(".main-cards").appendChild(mainCard)
});

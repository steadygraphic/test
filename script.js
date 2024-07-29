// script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.banner .slides img');
const totalSlides = slides.length;

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlides();
}

setInterval(nextSlide, 5000);

function showContact() {
    document.getElementById('contact-popup').style.display = 'block';
}

function closeContact() {
    document.getElementById('contact-popup').style.display = 'none';
}
function copyWeChat() {
    // 使用虚拟文本域来复制文本
    const wechatId = "steadygraphic";
    const tempInput = document.createElement("input");
    tempInput.value = wechatId;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // 显示提示信息
    const message = document.getElementById("message");
    message.innerText = "微信号已复制，请到微信粘贴添加好友";
    message.style.opacity = 1;

    // 3秒后渐隐
    setTimeout(() => {
        message.style.opacity = 0;
    }, 3000);
}
document.addEventListener('DOMContentLoaded', showSlides);
const imagess = document.querySelectorAll('img');

    imagess.forEach(image => {
        // 添加鼠标移入事件监听器
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)'; // 放大1.1倍
        });

        // 添加鼠标移出事件监听器
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)'; // 恢复原大小
        });
        // 添加鼠标移出事件监听器
        image.addEventListener('click', () => {
            showContact(); // 恢复原大小
        });
    });
function resizeIframe() {
    var iframes = document.getElementsByClassName('iframe-animation');
    var height = window.innerHeight - 30;
    if (window.innerHeight>window.innerWidth){
      height=window.innerWidth/1.4
    }
    for (var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i];
      iframe.style.height = height + 'px';
      var rect = iframe.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        iframe.classList.add('visible');
      }
    }
    var iframes = document.getElementsByClassName('iframe-animation1');
    var height = window.innerHeight - 30;
    if (window.innerHeight>window.innerWidth){
      height=window.innerWidth/1.8
    }
    for (var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i];
      iframe.style.height = (height/2) + 'px';
      var rect = iframe.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        iframe.classList.add('visible');
      }
    }
  }

  window.addEventListener('load', resizeIframe);
  window.addEventListener('scroll', resizeIframe);
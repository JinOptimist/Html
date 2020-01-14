window.addEventListener('load', function() {
    var images = document.getElementsByClassName('galeria-item');
    var likes = document.getElementsByClassName('galeria-likes');
    handleImagesClicks(images);

    function handleImagesClicks(images) {
        for (var i = 0; i < images.length; i++) {
            (function(index) {
                images[index].addEventListener('click', function(event) {
                    var imagePath = event.target.src;
                    console.log(imagePath)
                    var bigImage = document.createElement('img');
                    bigImage.src = imagePath;

                    var wrapper = document.createElement('div');
                    wrapper.style.width = '80%';
                    bigImage.style.width = '100%';
                    wrapper.style.top = '10%';
                    wrapper.style.left = '10%';
                    wrapper.style.height = '80%';
                    bigImage.style.height = '100%';
                    wrapper.style.position = 'fixed';
                    wrapper.style.backgroundColor = 'white';

                    var textSpan = document.createElement('span');
                    textSpan.innerText = likes[index].innerText;
                    textSpan.style.fontSize = '25px';
                    textSpan.style.color = 'blue';

                    wrapper.appendChild(bigImage);
                    wrapper.appendChild(textSpan);

                    wrapper.addEventListener('click', function() {
                        document.body.removeChild(wrapper);
                    })

                    document.body.appendChild(wrapper);
                })
            })(i);
        }
    }
})
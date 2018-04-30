(function() {
  'use strict'

  const textblock = document.getElementById('textblock')
  const textblockW = document.getElementById('textblock-w')

  textblock.addEventListener('keyup', e => {
    let target = e.target;
    str = target.value
    main(str)
    requestAnimationFrame(function() {
      textblock.focus()
    })
  })

  let str =
`слово "але" - червоний;
слово "або або або" - синій;
слово "але але але" - червоний;
слово "але або" - зелений;
слово "або але або" - коричневий;`

  main(str);

  function main(data) {
    textblock.value = data;

    data = data.replace(/але або/gm, '{[1]}')
    data = data.replace(/або але/gm, '{[2]}')
    data = data.replace(/але/gm, '<span class="red">але</span>')
    data = data.replace(/або/gm, '<span class="darkblue">або</span>')
    data = data.replace(/{\[1\]}/gm, '<span class="green">але або</span>')
    data = data.replace(/{\[2\]}/gm, '<span class="brown">або але</span>')

    textblockW.innerHTML = `<pre>${data}</pre>`;
    textblockW.appendChild(textblock)
  }
}())
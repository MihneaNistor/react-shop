import React from 'react'
import '././styles/Info.css'
import { Link } from 'react-router-dom'

function Info() {
  return (
    <div className='info'>
      <h1>Info</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac commodo lorem. Phasellus imperdiet,
         velit vel tincidunt efficitur, nibh nibh dictum nibh,
         in eleifend justo odio in tellus.
          Nullam euismod metus ut ante feugiat,
           quis porta mauris malesuada.
            Nunc vel mauris justo. Sed id mauris et
          velit feugiat bibendum.
           Mauris consequat enim id nibh faucibus scelerisque.
            Proin euismod sapien et neque euismod, nec
             pulvinar elit malesuada.
           Sed vel neque vitae lectus
            dictum sodales vitae vel lacus. Sed tristique erat
             sit amet ipsum malesuada, vel ultrices mauris
              efficitur. Aenean lacinia magna auctor, sagittis enim vel,
               vehicula lacus. Mauris quis diam eros. Aliquam euismod nisl eget
                mi lobortis, id fermentum sapien gravida.
             Cras in mauris id nulla mollis auctor.
              Nunc eget enim quam. Donec suscipit dolor
               non sapien varius, non faucibus nisl bibendum.
      </p>
      <button>
        <Link to = '/'>
          Go To Shop!
        </Link>
      </button>
    </div>
  )
}

export default Info



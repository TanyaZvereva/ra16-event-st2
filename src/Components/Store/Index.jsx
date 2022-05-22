import {useState} from 'react'

import CardView from './CardView/Index'
import ListView from './ListView/Index'
import IconSwitch from './IconSwitch'

function Store({products}) {
  const [isBlockVisible, setIsBlockVisible] = useState(true)

  return (
    <section>
      <IconSwitch
        icon={isBlockVisible ? "view_module" : "view_list"}
        onSwitch={() => setIsBlockVisible(prev => !prev)}
      />

      {
        isBlockVisible ? <CardView products={products}/> : <ListView products={products}/>
      }

    </section>
  );
}

export default Store;

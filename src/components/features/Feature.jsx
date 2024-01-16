import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Feature({title, description, icon}){
    //CORE_CONCEPTS içindeki itemları teker teke prop olarak geçirebilin
    //bir objenin içindeki specific itemları, o componentde yapacağın işleme göre seçip alabilir ve destructor içinde prop halinde geçirebilin
  
    return (
      <li>
        <FontAwesomeIcon icon={icon} style={{fontSize: '30px'}} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
}
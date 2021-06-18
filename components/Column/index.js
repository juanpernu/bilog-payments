import Link from 'next/link';

const Column = ({ items, title }) => {
  return (
    <div className="column">
      <h4 className="column-title">{title}</h4>
      {
        items.map((item, index) => {
          return (
            item.href.includes('http') ?
              <a key={index} className="alink" href={`${item.href}`}>{item.text}</a> :
              <Link key={index} href={`${item.href}`}>
                <a className="alink">{item.text}</a>
              </Link>
          )
        })
      }
    </div>
  )
}

export default Column;

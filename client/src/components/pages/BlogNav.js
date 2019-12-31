import React from 'react';
import {Link} from 'react-router-dom';

const BlogNav = ({id,title}) => (
  <>
    <div>
      <Link
      to ={{
        pathname: `/Blog/${id}`,
        state: {id, title}
      }}
      >
      {title}
      </Link>
    </div>
  </>
)

export default BlogNav
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import Logo from '../../assets/images/banner.svg';

const Wrapper = styled.div`
  background-color: #007eff;
  height: ${props => props.theme.main.sizes.header.height};

  .leftMenuHeaderLink {
    &:hover {
    //   text-decoration: none;
    }
  }
.kbgpgb{
    background-color: #fff !important;
}
  .projectName {
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    
    vertical-align: middle;
    font-size: 2rem;
    letter-spacing: 0.2rem;
   
    font-size:40px;

    // background-image: url(${'./assets/images/logo_strapi.png'});
    // background-repeat: no-repeat;
    // background-position: center center;
    // background-size: auto 3rem;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
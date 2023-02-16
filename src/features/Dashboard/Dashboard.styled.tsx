import styled from 'styled-components';

export const DashboardStyled = styled.div`
  .flex{
    display:flex;
    flex-wrap:wrap;
    gap:2rem;
  }
  .ant-layout-sider-collapsed{
    .logo p{
      padding-left:0;
    }
  }
  .logo{
  .main-logo{
    background-color:var(--secondary-l1);
    margin-bottom:2.8rem;
    display: flex;
    justify-content: center;
    width:100%;
    padding-top:1.2rem;
    text-align:center;
    img{
      height: 6rem;
    width: 6rem;
    }
    p{
    font-size:5rem;
    color:red !important;
    margin-bottom:0;
    text-align:center;
    }
  }
  p{
      padding-left:2.8rem;
      margin-bottom:3.2rem;
    }
  }
  .ant-layout-sider-children {
    .anticon{
    font-size:2.4rem;
    .ant-menu-title-content{
      margin-inline-start:1.6rem;
      a{
        font-family:inherit;
      }
    }
  }
  .logo .text-20-semi,
  .ant-menu-title-content{
    font-family:var( --nav-font-family) !important;
    a{
      font-family:inherit;
    }
  }
  .ant-menu-submenu,
  .ant-menu-item{
      margin-bottom:3.2rem !important;
      padding-left:2.4rem;
      &>div{
        display:flex;
        padding:0;
        align-items:center;
      }
    }
  }
  .ant-layout-header{
    background:var( --primary-default);
    display: flex;
    justify-content: space-between;
    height:unset;
    line-height:unset;
    padding: 1.9rem 4.2rem 1.9rem 1.2rem;
    align-items:center;
    .trigger svg{
      height: 4rem;
    width: 4.8rem;
      color:#FFFFFF;
    }
    .align-left{
      display: flex;
      align-items:center;
      gap:4.2rem;
    }
    .align-right{
      display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .notification{
      display: flex;
    justify-content: center;
    align-items: center;
    margin-right:1rem;
    gap: 2rem;
    &>div{
      position:relative;
    }
    .count{
      width:3.2rem;
      height:2.8rem;
      line-height:2.8rem;
      border-radius:50%;
      background: #0065FF;
      color:#FFFFFF;
      position:absolute;
      top: -2.8rem;
    right: -1.8rem;

      text-align:center;
    }
    .icon{
      height:2.4rem;
      width:2.4rem;
      fill:#FFFFFF;
    }
    }
    .ant-dropdown-trigger{
      display:flex;
      justify-content: center;
    align-items: center;
    gap: 1rem;
    }
    img{
      height:3.2rem;
      width:3.2rem;
      border-radius:50%;
    }
    }
    .input-search{
      width: 36.4rem;
    height: 4.8rem;
    border-radius: 5rem;
    font-size: 2.4rem;
    padding: 1.2rem;
    border:0;
    .ant-input-prefix{
      margin-left: .6rem;
    }
    input{
      font-size:2.4rem;
    }
    .icon{
      width: 2.4rem;
    height: 2.4rem;
    }
    }
  }
  section.site-layout{
    height: 100vh;
    overflow: hidden;
  }
  .card-wrapper{
    margin-top:6.2rem;
    article{
      display: flex;
      margin-bottom:4.5rem;
    gap: 1rem;
    .text-holder{
      width:80%;
      display: flex;
    flex-direction: column;
    }
    .icon{
      height:4.8rem;
      width:4rem;
    }
    }
    .ant-progress-outer{
      padding-inline-end:unset !important;
      .ant-progress-inner{
        background-color:#FFFFFF;
      }
    .ant-progress-bg{
      height:1.6rem !important;
    }
  }
    .ant-progress-text{
      display:none !important;
    }
  }
  .ant-card{
    width: 27.6rem;
    width: 23.5%;
background: #FF5722;
box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2);
border-radius: 1.6rem 0px 0px 0px;
margin-bottom:7.8rem;
.title{
  font-size:1.9rem;
}
  }
  .ant-layout-content{
    height:calc(100vh - 8.8rem);
    padding:4.8rem 2.4rem;
    overflow:auto;
  scrollbar-color: var(--primary-default) transparent;
  scrollbar-width: thin;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 4px;
    height:2px;
  }
  &:hover {
    &::-webkit-scrollbar-track {
      background: transparent;
      width: 4px;
      height:1px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary-default);
      height: 25vh;
    }
  }

  }
  .ant-menu,
  .ant-layout-sider-children{
    background:var(--secondary-default);
    li{
      color:var( --font-secondary-l1);
      font-size:2rem !important;
      align-items: center;
    display: flex;
    height:unset !important;
    line-height:unset !important;
    &>.anticon{
      line-height:unset !important;
    }
    &.ant-menu-submenu>div span,
    &.ant-menu-submenu>div{
      height:unset !important;
      line-height:unset !important;
    }
      &:hover,
      &.ant-menu-submenu-active:hover>div,
      &.ant-menu-submenu-selected>div,
      &.ant-menu-item-selected{
        background:unset !important;
        color:var(--primary-default) !important;
      }
      .anticon{
        display:inline-block;
        font-size: 2rem;
        svg{
          height: 2.4rem;
    width: 2.4rem;
}
        }
      }
    }
  }
.ant-layout-sider-collapsed{
  .logo p{
      color:#FFFFFF;
      width: 100%;
    text-align: center
    }
}
  .logo{
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width:100%;
    p{
      color:#FFFFFF;
      width: 100%;
    text-align: left
    }
    img{
      height:3rem;
      width:3rem;
    }
  }

  .bar-wrap{
    display:flex;
    gap:5.6rem;
    .bar h3{
      margin-bottom:3.8rem;
    }
    .bar-one,.bar-two{
      width:100%;
    }
.recharts-responsive-container{
  height:38rem !important;
  position: relative;
    left: -3.2rem;
    width:99% !important;
}
  }
  .recharts-cartesian-axis-tick-value{
    color:#6A717D;
    font-size:10px;
  }
`;

import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/userphoto.jpg';
import { NavLink } from 'react-router-dom';
import Paginator2 from '../common/Paginator/Paginator2';


let Users = (props) => {
  
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)/100;
    //     let pages = [];
    //     for ( let i = 1; i <= pagesCount; i++) {
    //         pages.push(i);
    //     };

    return (
        (<div className={styles.super_wrapper}>
            <Paginator2 currentPage={props.currentPage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} />
            {/* <div className={styles.div_top}>Users</div>
            <div id={styles.div_pagesNumbers}>
                { pages.map( (p,i) => { 
                    return <span key = {i} className={props.currentPage === p ? styles.selectedPage : undefined} onClick={ (e) => { props.onPageChanged(p); } }>{p}</span>
                    })
                }                    
            </div> */}


                <div className={styles.users_wrapper}>
        
                    { props.users.map( u => 
                    
                    <div key = {u.id} className={styles.small_wrapper}>
                        <div className={styles.div_left}>
                            <div className={styles.div_img}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img alt="" src={ u.photos.small != null ? u.photos.small : userPhoto } />
                                </NavLink>
                            </div>
                            <div className={styles.div_button}>
                                { u.followed
                                     ? <button disabled={props.followingInProgress.some( id => id === u.id )} onClick = { () => {
                                          props.unfollow(u.id);
                                          
                                      } }>Unfollow</button> 

                                     : <button disabled={props.followingInProgress.some( id => id === u.id )} onClick = { () => {
                                        props.follow(u.id);

                                      } }>Follow</button> }
                            </div>
                        </div>
                        <div className={styles.div_right}>
                            <div className={styles.div_name}>{u.name}</div>
                            <div className={styles.div_status}>{u.status}</div>
                            <div className={styles.div_location}>{"u.location.city"},<br/>{"u.location.country"}</div>
                        </div>
                    </div> )
                    }
                </div>
            </div>
        )
    )
}  

export default Users;
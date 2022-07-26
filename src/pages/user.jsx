import React, { useContext, useEffect } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";

const User = () => {
  const { getUser, user, loading } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (user) {
    const {
      login,
      id,
      node_id,
      avatar_url,
      gravatar_id,
      url,
      html_url,
      followers_url,
      following_url,
      gists_url,
      gist_id,
      starred_url,
      owner,
      subscriptions_url,
      subscriptions,
      organizations_url,
      repos_url,
      events_url,
      privacy,
      received_events_url,
      received_events,
      type,
      site_admin,
      name,
      company,
      blog,
      location,
      email,
      hireable,
      bio,
      twitter_username,
      public_repos,
      public_gists,
      followers,
      following,
      created_at,
    } = user;
    return (
      <>
        <div className="w-full mx-auto lg2:w-10/12">
          <div className="mb-4">
            <Link to="/" className="btn btn-ghost">
              Back To Search
            </Link>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
            <div className="custom-card-image mb-6 md:mb-0">
              <div className="rounded-lg shadow-xl card image-full">
                <figure>
                  <img src={avatar_url} alt="avatar" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default User;

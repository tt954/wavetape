class Api::FollowsController < ApplicationController
  before_action :ensure_logged_in

  def create
    @follow = current_user.out_follows.create!(followee_id: params[:user_id])
    @user = current_user
    render "api/users/show"
  end 

  def destroy
    @follow = current_user.out_follows.find_by(followee_id: params[:user_id])
    @follow.destroy!
    @user = current_user
    render "api/users/show"
  end 
  
end

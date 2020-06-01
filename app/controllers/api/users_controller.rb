class Api::UsersController < ApplicationController
  before_action :ensure_logged_in, only: [:edit]

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def edit 
    @user = User.find_by(id: params[:id])

    if current_user && @user
      render "api/users/show" if @user.update(user_params) 
    else 
      render json: @user.errors.full_messages, status: 422
    end 
  end 

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

end

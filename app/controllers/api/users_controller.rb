class Api::UsersController < ApplicationController
  before_action :ensure_logged_in, only: [:edit]

  def index 
    @users = User.all #includes(:followers, :followees)
    render :index
  end 

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end 

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def edit 
    @user = User.find_by(id: params[:id])

    if @user.update(user_params) 
      render :show #"api/users/show" 
    else 
      render json: @user.errors.full_messages, status: 422
    end 
  end 

  private
  def user_params
    params.require(:user).permit(:email, :username, :password)
  end

end

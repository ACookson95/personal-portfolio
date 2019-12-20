class Api::PostsController < ApplicationController

  def index
    render json: Post.all
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: { errors: @post.errors }, status: :unprocessable_entity
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render json: @post
    else 
      render json: { errors: @post.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @post.find(params[:id]).destroy
    render json: {message: "Post Deleted"}
  end

  private

  def post_params
    params.require(:item).permit(:title, :author, :img, :body)
  end

end

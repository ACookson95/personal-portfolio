class Api::FormResponsesController < ApplicationController

  def index
    render json: Form_Response.all
  end

  def create
    @form_response = Form_Response.new(form_response_params)
    if @form_response.save
      render json: @form_response
    else
      render json: { errors: @form_response.errors }, status: :unprocessable_entity
    end
  end

  def update
    @form_response = Form_Response.find(params[:id])
    if @form_response.update(form_response_params)
      render json: @form_response
    else 
      render json: { errors: @form_response.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @form_response.find(params[:id]).destroy
    render json: {message: "Form Response Deleted"}
  end

  private

  def form_response_params
    params.require(:item).permit(:name, :email, :comments)
  end


end

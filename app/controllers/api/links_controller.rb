class Api::LinksController < ApplicationController
  def index
    @links = Link.all
  end

  def create
    @link = Link.new(link_params)
    if @link.save
      render 'api/links/show'
    else
      render json: @link.errors.full_messages, status: 422
    end
  end

  def show
    temp_short_link = "https://semashort.herokuapp.com/#/links/" + params[:short_link]
    debugger
    @link = Link.find_by(short_link: temp_short_link)
    if @link
      render 'api/links/show'
    else
      render json: @link.errors.full_messages, status: 404
    end
  end

  def redirect
    @link = Link.find_by(:short_link)
  end

  private
  def link_params
    params.require(:link).permit(:long_link, :short_link, :visits)
  end
end

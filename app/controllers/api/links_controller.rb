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
    @link = Link.last
  end

  private
  def link_params
    params.require(:link).permit(:long_link, :short_link, :visits)
  end
end

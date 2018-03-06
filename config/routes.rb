Rails.application.routes.draw do

  get '/api/links/:short_link', :to => 'api/links#show', defaults: {format: :json}

  namespace :api, defaults: {format: :json} do
    resources :links, only: [:index, :create, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
end

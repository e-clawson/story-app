Rails.application.routes.draw do
  scope :api do
    scope :v1 do
      # get "/ordered-prompts", to: "prompts#ordered"
      # get "/most-stories", to: "posts#most_stories"
      # post "/auth/:provider/callback", to: "sessions#omniauth"
      # get "/prompts/:id", to: "prompts#show"

      resources :users, only: [:update, :destroy]
      post "/signup", to: "users#create"
      get "/me", to: "users#show"
      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"
      delete "/delete", to: "users#destroy"
      get "/users/:id/stories", to: "users#index"
      
      resources :stories, only: [:index, :update, :create]
      patch "/stories/:id", to: "stories#update"
      get "/prompts/:id/stories", to: "stories#index"
      post "/prompts/:prompt_id/stories", to: "stories#create"
      delete "stories/:id/", to: "stories#destroy"

      resources :prompts, only: [:index, :create]
      get "/prompts/:id", to: "prompts#show"
      # post "/prompts", to: "prompts#create"
        # resources :stories, shallow: true
     
    end
  end
end

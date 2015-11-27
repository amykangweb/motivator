class Vote
  include Mongoid::Document

  field :score, type: Boolean
  embedded_in :quote, :inverse_of => :votes
end

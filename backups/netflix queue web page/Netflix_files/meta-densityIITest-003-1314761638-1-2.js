
if(!window.netflix){window.netflix={}}window.netflix.namespace=function(D){var B=window.netflix;var F=null;var E=D.split(".");if(E[0]==="netflix"){E.shift()}var A=E.length;for(var C=0;C<A;++C){F=E[C].toString();if(!!F){B=B[F]=B[F]||{}}}return B};
(function(A){A(document).ready(function(){A("#bd").delegate("a.playLink",{mouseenter:netflix.BobMovieManager.handleMouseEnter,mouseleave:netflix.BobMovieManager.handleMouseLeave})})})(jQuery);
